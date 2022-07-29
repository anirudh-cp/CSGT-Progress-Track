from statistics import mode
from djongo import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, Group

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


class MyAccountManager(BaseUserManager):
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


class Account(AbstractBaseUser):
    email = models.EmailField(verbose_name="email", max_length=60, unique=True, primary_key=True)
    date_joined = models.DateTimeField(
        verbose_name='date joined', auto_now_add=True)
    last_login = models.DateTimeField(verbose_name='last login', auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    groups = models.ManyToManyField(Group)

    USERNAME_FIELD = 'email'

    objects = MyAccountManager()

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
    ]
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    Emp_ID = models.IntegerField(primary_key=True)
    Name = models.CharField(max_length=100)
    Designation = models.CharField(max_length=100)
    School = models.CharField(max_length=100)
    DOJ = models.DateField()
    DOB = models.DateField()
    Gender = models.CharField(max_length=10, choices=GENDER)
    ORCID_ID = models.IntegerField(null=True, blank=True, default=0)
    Researchgate = models.CharField(max_length=100, null=True, blank=True)
    linkedin = models.CharField(max_length=100, null=True, blank=True)
    Google_scholar_name = models.CharField(max_length=100,null=True, blank=True)
    Personal_page = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return str(self.Emp_ID)


class conference(models.Model):

    TYPE = [
        ('National', 'National'),
        ('International', 'International'),
        ('Internal', 'Internal'),

    ]

    POSITION = [
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 4),
        (5, 5),
        (6, 6),
    ]

    TY = [
        ('National', 'National'),
        ('International', 'International'),

    ]

    jy = [
        ('Yes', 'Yes'),
        ('No', 'No'),
    ]

    TP = [
        ('Open Access', 'Open Access'),
        ('Subscription', 'Subscription'),
    ]

    title = models.CharField(max_length=100)
    no_of_authors = models.IntegerField()
    Designation = models.CharField(max_length=20)
    Collaboration = models.CharField(max_length=20, choices=TYPE)
    Author_pos = models.IntegerField(choices=POSITION)
    Conference_name = models.CharField(max_length=100)
    Conference_startdate = models.DateField()
    Conference_enddate = models.DateField()
    Place_of_conference = models.CharField(max_length=100)
    Type = models.CharField(max_length=20, choices=TY)
    Indexed_Scopus = models.CharField(max_length=4, choices=jy)
    DOI = models.CharField(max_length=30, null=True, blank=True)
    Type_of_publication = models.CharField(max_length=100, choices=TP)
    Emp_ID = models.ForeignKey(personal, null=True, on_delete=models.SET_NULL)
    Funder_name = models.CharField(
        'Enter Funder name if type of publications is "Open" ', max_length=100, blank=True)
    Amount_of_Publication = models.IntegerField(
        'Enter Amount of Publication if type is "Open" ', blank=True, null=True)
    Support = models.CharField(
        'Whether Support received from Vellore Institute of Technology?', max_length=4, choices=jy, null=True)

    def __str__(self):
        return self.title
    
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['Emp_ID', 'title'], name='unique_EmpID_title_conference'
            )
        ]


class journal(models.Model):
    INDEX = [
        ('SCI', 'SCI'),
        ('SCIE', 'SCIE'),
        ('SCOPUS', 'SCOPUS'),
    ]

    TYPE = [
        ('National', 'National'),
        ('International', 'International'),
        ('Internal', 'Internal'),

    ]

    POSITION = [
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 4),
        (5, 5),
        (6, 6),
    ]
    jy = [
        ('Yes', 'Yes'),
        ('No', 'No'),
    ]

    TP = [
        ('Open Access', 'Open Access'),
        ('Subscription', 'Subscription'),
    ]

    title = models.CharField(max_length=100)
    no_of_authors = models.IntegerField()
    Designation = models.CharField(max_length=20)
    Collaboration = models.CharField(max_length=20, choices=TYPE)
    Author_pos = models.IntegerField(choices=POSITION)
    Journal_name = models.CharField(max_length=100)
    Indexing = models.CharField(max_length=20, choices=INDEX)
    Impact_factor = models.FloatField(null=True, blank=True)
    year = models.IntegerField()
    Vol_no = models.IntegerField(null=True, blank=True)
    Issue_no = models.IntegerField(null=True, blank=True)
    DOI = models.CharField(max_length=30, null=True, blank=True)
    Emp_ID = models.ForeignKey(personal, null=True, on_delete=models.SET_NULL)
    Type_of_publication = models.CharField(max_length=100, choices=TP)
    Funder_name = models.CharField(
        'Enter Funder name if type is "Open" ', max_length=100, blank=True)
    Amount_of_Publication = models.IntegerField(
        'Enter Amount of Publication if type is "Open" ', blank=True, null=True)
    Support = models.CharField(
        'Whether Support received from Vellore Institute of Technology?', max_length=4, choices=jy, null=True)

    def __str__(self):
        return self.title

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['Emp_ID', 'title'], name='unique_EmpID_title_journal'
            )
        ]


class book_chapter(models.Model):
    INDEX = [
        ('SCI', 'SCI'),
        ('SCIE', 'SCIE'),
        ('SCOPUS', 'SCOPUS'),
    ]

    TYPE = [
        ('National', 'National'),
        ('International', 'International'),
        ('Internal', 'Internal'),

    ]

    POSITION = [
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 4),
        (5, 5),
        (6, 6),
    ]
    jy = [
        ('Yes', 'Yes'),
        ('No', 'No'),
    ]

    TP = [
        ('Open Access', 'Open Access'),
        ('Subscription', 'Subscription'),
    ]

    TY = [
        ('National', 'National'),
        ('International', 'International'),

    ]

    title = models.CharField(max_length=100)
    no_of_authors = models.IntegerField()
    Designation = models.CharField(max_length=20)
    Collaboration = models.CharField(max_length=20, choices=TYPE)
    Author_pos = models.IntegerField(choices=POSITION)
    Indexing = models.CharField(max_length=20, choices=INDEX)
    ISSN_ISBN_number = models.IntegerField()
    year = models.IntegerField()
    book_title = models.CharField(max_length=100)
    publisher_name = models.CharField(max_length=30)
    Type_of_publisher = models.CharField(max_length=30, choices=TY)
    Vol_no = models.IntegerField(null=True)
    Issue_no = models.IntegerField(null=True)
    DOI = models.CharField(max_length=30, null=True)
    Emp_ID = models.ForeignKey(personal, null=True, on_delete=models.SET_NULL)
    Type_of_publication = models.CharField(max_length=100, choices=TP)
    Funder_name = models.CharField(
        'Enter Funder name if type is "Open" ', max_length=100, blank=True)
    Amount_of_Publication = models.IntegerField(
        'Enter Amount of Publication if type is "Open" ', blank=True, null=True)
    Support = models.CharField(
        'Whether Support received from Vellore Institute of Technology?', max_length=4, choices=jy, null=True)

    def __str__(self):
        return self.title

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['Emp_ID', 'title'], name='unique_EmpID_title_bookChapter'
            )
        ]


class book_editor(models.Model):

    POSITION = [
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 4),
        (5, 5),
        (6, 6),
    ]
    TYPE = [
        ('National', 'National'),
        ('International', 'International'),
        ('Internal', 'Internal'),

    ]

    jy = [
        ('Yes', 'Yes'),
        ('No', 'No'),
    ]

    TP = [
        ('Open Access', 'Open Access'),
        ('Subscription', 'Subscription'),
    ]

    TY = [
        ('National', 'National'),
        ('International', 'International'),

    ]

    INDEX = [
        ('SCI', 'SCI'),
        ('SCIE', 'SCIE'),
        ('SCOPUS', 'SCOPUS'),
    ]

    title = models.CharField(max_length=100)
    no_of_authors = models.IntegerField()
    Designation = models.CharField(max_length=20)
    Collaboration = models.CharField(max_length=20, choices=TYPE)
    Author_pos = models.IntegerField(choices=POSITION)
    Indexing = models.CharField(max_length=20, choices=INDEX)
    ISSN_ISBN_number = models.IntegerField()
    year = models.IntegerField()
    publisher_name = models.CharField(max_length=30)
    Type_of_publisher = models.CharField(max_length=30, choices=TY)
    Vol_no = models.IntegerField(null=True)
    Issue_no = models.IntegerField(null=True)
    DOI = models.CharField(max_length=30, null=True)
    Emp_ID = models.ForeignKey(personal, null=True, on_delete=models.SET_NULL)
    Type_of_publication = models.CharField(max_length=100, choices=TP)
    Funder_name = models.CharField(
        'Enter if type is "Open" ', max_length=100, blank=True)
    Amount_of_Publication = models.IntegerField(
        'Enter if type is "Open" ', blank=True, null=True)
    Support = models.CharField(
        'Whether Support received from Vellore Institute of Technology?', max_length=4, choices=jy, null=True)

    def __str__(self):
        return self.title

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['Emp_ID', 'title'], name='unique_EmpID_title_bookEditor'
            )
        ]


class consultancy_project(models.Model):

    jy = [
        ('Yes', 'Yes'),
        ('No', 'No'),
    ]

    TYPE = [
        ('Product development', 'Product development'),
        ('Research Collaboration', 'Research Collaboration'),
    ]

    Emp_ID = models.ForeignKey(personal, null=True, on_delete=models.SET_NULL)
    type_of_consultancy = models.CharField(max_length=50, choices=TYPE)
    company_name = models.CharField(max_length=50)
    Funding = models.CharField(max_length=5, null=True, choices=jy, blank=True)
    Amount = models.IntegerField(
        'if funding recieved Enter Amount:', blank=True, null=True)
    invoice_number = models.IntegerField(
        'if funding recieved Enter invoice', blank=True, null=True)
    consultancy_startdate = models.DateField()
    consultancy_enddate = models.DateField()

    def __str__(self):
        return self.company_name
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['Emp_ID', 'company_name'], name='unique_EmpID_CName_combination'
            )
        ]



class patent(models.Model):

    TY = [
        ('National', 'National'),
        ('International', 'International'),

    ]
    POSITION = [
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 4),
        (5, 5),
        (6, 6),
    ]

    Emp_ID = models.ForeignKey(personal, null=True, on_delete=models.SET_NULL)
    patent_title = models.CharField(max_length=40)
    Type_of_patent = models.CharField(max_length=20, choices=TY)
    no_of_authors_in_patent = models.IntegerField()
    Author_pos = models.IntegerField(choices=POSITION)
    patent_created_date = models.DateField()

    def __str__(self):
        return self.patent_title

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['Emp_ID', 'patent_title'], name='unique_EmpID_PTitle_combination'
            )
        ]

