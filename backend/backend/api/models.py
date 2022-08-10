import django
from djongo import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, Group

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

from datetime import datetime


class my_account_manager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        user = self.create_user(
            email=self.normalize_email(email),
            password=password,
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class account(AbstractBaseUser):
    # 320 Characters is the max len of a email.
    email = models.EmailField(max_length=320, unique=True, primary_key=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    groups = models.ManyToManyField(Group)

    USERNAME_FIELD = 'email'

    objects = my_account_manager()

    def __str__(self):
        return self.email

    # For checking permissions. to keep it simple all admin have ALL permissons
    def has_perm(self, perm, obj=None):
        return self.is_admin

    # Does this user have permission to view this app? (ALWAYS YES FOR SIMPLICITY)
    def has_module_perms(self, app_label):
        return True


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class personal(models.Model):

    GENDER = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
        ('Prefer not to say', 'Prefer not to say')
    ]

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    emp_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    designation = models.CharField(max_length=100)
    school = models.CharField(max_length=20)
    date_of_join = models.DateField()
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=20, choices=GENDER)
    orcid = models.IntegerField(null=True, blank=True, default=0)
    research_gate = models.CharField(max_length=256, null=True, blank=True)
    linkedin = models.CharField(max_length=256, null=True, blank=True)
    google_scholar = models.CharField(max_length=256, null=True, blank=True)
    personal_page = models.CharField(max_length=256, null=True, blank=True)

    def __str__(self):
        return str(self.emp_id)


class conference(models.Model):

    TYPE = [('National', 'National'), ('International', 'International'), ]

    INDEXING = [
        ('SCI', 'SCI'),
        ('SCIE', 'SCIE'),
        ('SCOPUS', 'SCOPUS'),
        ('Springer', 'Springer'),
        ('Ei Compendex', 'Ei Compendex')
    ]

    SUPPORT = [('Yes', 'Yes'), ('No', 'No'), ]

    CONDUCTING = [('Conducting', 'Conducting'), ('Attending', 'Attending')]

    PUBLISHED_AS = [('Research Paper', 'Research Paper'), ]

    emp_id = models.ForeignKey(personal, on_delete=models.CASCADE)
    article_title = models.CharField(max_length=100)
    no_of_authors = models.IntegerField()
    conference_name = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField()
    place = models.CharField(max_length=100)
    type = models.CharField(max_length=20, choices=TYPE)
    indexing = models.CharField(max_length=20, choices=INDEXING)
    conducting = models.CharField(max_length=20, choices=CONDUCTING)
    no_of_attendees = models.IntegerField()
    published_as = models.CharField(max_length=30, choices=PUBLISHED_AS)
    digital_obj_id = models.CharField(max_length=30, null=True, blank=True)
    funder_name = models.CharField(max_length=100, null=True, blank=True)
    amount_of_publication = models.IntegerField(blank=True, null=True)
    support = models.CharField(max_length=4, choices=SUPPORT, null=True)

    def __str__(self):
        return self.article_title

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['emp_id', 'article_title'], name='unique-emp_id-article_title-conference'
            )
        ]


class journal(models.Model):
    INDEXING = [
        ('SCI', 'SCI'),
        ('SCIE', 'SCIE'),
        ('SCOPUS', 'SCOPUS'),
        ('Springer', 'Springer'),
        ('Ei Compendex', 'Ei Compendex')
    ]

    COLLABORATION = [
        ('National', 'National'),
        ('International', 'International'),
        ('Internal', 'Internal'),

    ]

    TYPE_OF_PUBLICATION = [
        ('Open Access', 'Open Access'),
        ('Subscription', 'Subscription'),
    ]

    SUPPORT = [('Yes', 'Yes'), ('No', 'No'), ]

    emp_id = models.ForeignKey(personal, null=True, on_delete=models.CASCADE)
    article_title = models.CharField(max_length=100)
    no_of_authors = models.IntegerField()
    journal_name = models.CharField(max_length=100)
    collaboration = models.CharField(max_length=20, choices=COLLABORATION)
    type_of_publication = models.CharField(
        max_length=100, choices=TYPE_OF_PUBLICATION)
    indexing = models.CharField(max_length=20, choices=INDEXING)
    impact_factor = models.FloatField(null=True, blank=True)
    year = models.IntegerField()
    volume_no = models.IntegerField(null=True, blank=True)
    issue_no = models.IntegerField(null=True, blank=True)
    digital_obj_id = models.CharField(max_length=30, null=True, blank=True)
    funder_name = models.CharField(max_length=100, null=True, blank=True)
    amount_of_publication = models.IntegerField(blank=True, null=True)
    support = models.CharField(max_length=4, choices=SUPPORT, null=True)

    def __str__(self):
        return self.article_title

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['emp_id', 'article_title'], name='unique-emp_id-article_title-journal'
            )
        ]


class book(models.Model):

    INDEXING = [
        ('SCI', 'SCI'),
        ('SCIE', 'SCIE'),
        ('SCOPUS', 'SCOPUS'),
        ('Springer', 'Springer'),
        ('Ei Compendex', 'Ei Compendex')
    ]

    COLLABORATION = [
        ('National', 'National'),
        ('International', 'International'),
        ('Internal', 'Internal'),

    ]

    TYPE_OF_PUBLICATION = [
        ('Open Access', 'Open Access'),
        ('Subscription', 'Subscription'),
    ]

    INDEX = [
        ('SCI', 'SCI'),
        ('SCIE', 'SCIE'),
        ('SCOPUS', 'SCOPUS'),
    ]

    SUPPORT = [('Yes', 'Yes'), ('No', 'No'), ]

    TYPE = [('Book Chapter', 'Book Chapter'),
            ('Book Editorial', 'Book Editorial')]

    emp_id = models.ForeignKey(personal, on_delete=models.CASCADE)
    book_title = models.CharField(max_length=100)
    chapter_title = models.CharField(max_length=100, null=True, blank=True)
    type = models.CharField(max_length=20, choices=TYPE)
    no_of_authors = models.IntegerField()
    type_of_publication = models.CharField(
        max_length=100, choices=TYPE_OF_PUBLICATION)
    volume_no = models.IntegerField(null=True, blank=True)
    issue_no = models.IntegerField(null=True, blank=True)
    digital_obj_id = models.CharField(max_length=30, null=True, blank=True)
    year = models.IntegerField()
    isbn = models.IntegerField()
    indexing = models.CharField(max_length=20, choices=INDEXING)
    publisher_name = models.CharField(max_length=100)
    funder_name = models.CharField(max_length=100, null=True, blank=True)
    amount_of_publication = models.IntegerField(blank=True, null=True)
    support = models.CharField(max_length=4, choices=SUPPORT)

    def __str__(self):
        return self.book_title

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['emp_id', 'book_title'], name='unique-emp_id-book_title-book'
            )
        ]


class consultancy(models.Model):

    FUNDING_STATUS = [
        ('Yes', 'Yes'),
        ('No', 'No'),
    ]

    TYPE = [
        ('Product development', 'Product development'),
        ('Research Collaboration', 'Research Collaboration'),
    ]

    emp_id = models.ForeignKey(personal, on_delete=models.CASCADE)
    type = models.CharField(max_length=50, choices=TYPE)
    description = models.CharField(max_length=256, blank=True, null=True)
    company_name = models.CharField(max_length=50)
    funding_status = models.CharField(max_length=5, choices=FUNDING_STATUS)
    amount_registered = models.IntegerField(blank=True, null=True)
    amount_sanctioned = models.IntegerField(blank=True, null=True)
    invoice_number = models.IntegerField(blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.company_name

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['emp_id', 'company_name'], name='unique-emp_id-company_name-consultancy'
            )
        ]


class patent(models.Model):

    TYPE = [
        ('National', 'National'),
        ('International', 'International'),

    ]

    emp_id = models.ForeignKey(personal, on_delete=models.CASCADE)
    title = models.CharField(max_length=40)
    type = models.CharField(max_length=20, choices=TYPE)
    no_of_authors = models.IntegerField()
    filed_date = models.DateField(default=datetime(1970, 1, 1))
    published_date = models.DateField(default=datetime(1970, 1, 1))
    granted_date = models.DateField(default=datetime(1970, 1, 1))

    def __str__(self):
        return self.title

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['emp_id', 'title'], name='unique-emp_id-title-patent'
            )
        ]


class project(models.Model):

    ROLES = [('PI', 'PI'), ('Co-PI', 'Co-PI'), ('Other', 'Other')]

    emp_id = models.ForeignKey(personal, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    role = models.CharField(max_length=30, choices=ROLES)
    funding_agency = models.CharField(max_length=100)
    amount_registered = models.IntegerField(blank=True, null=True)
    amount_sanctioned = models.IntegerField(blank=True, null=True)
    start_date = models.DateField(default=datetime(1970, 1, 1))

    def __str__(self):
        return self.title

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['emp_id', 'title'], name='unique-emp_id-title-project'
            )
        ]


class industrial_interaction(models.Model):

    MOU_SIGNED = [('Yes', 'Yes'), ('No', 'No')]

    emp_id = models.ForeignKey(personal, on_delete=models.CASCADE)
    mou_signed = models.CharField(max_length=30, choices=MOU_SIGNED)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=256, null=True, blank=True)
    date = models.DateField(default=datetime(1970, 1, 1))

    def __str__(self):
        return self.description
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['emp_id', 'title'], name='unique-emp_id-title-industrial'
            )
        ]


class event(models.Model):

    YES_NO = [('Yes', 'Yes'), ('No', 'No'), ]

    TYPE = [('Organized', 'Organized'),
            ('Attended', 'Attended')]
    
    EVENT = [('FDP', 'FDP'), ('Workshop', 'Workshop'), 
             ('Conference', 'Conference'), ('Seminar', 'Seminar'),
             ('Webinar', 'Webinar'), ('VAP', 'VAP'), 
             ('Guest Lecture', 'Guest Lecture')]
    
    COLLABORATION = [
        ('National', 'National'),
        ('International', 'International'),
        ('Internal', 'Internal'),

    ]
    
    emp_id = models.ForeignKey(personal, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    event = models.CharField(max_length=30, choices=EVENT)
    type = models.CharField(max_length=20, choices=TYPE)
    start_date = models.DateField()
    end_date = models.DateField()
    no_of_participants = models.IntegerField(blank=True, null=True)
    reg_fee = models.IntegerField()
    collaboration = models.CharField(max_length=20, choices=COLLABORATION)
    sponspored = models.CharField(max_length=5, choices=YES_NO)
    amount_from_vit = models.CharField(max_length=5, choices=YES_NO, blank=True, null=True)
    
    def __str__(self):
        return self.title

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['emp_id', 'title'], name='unique-emp_id-title-event'
            )
        ]


