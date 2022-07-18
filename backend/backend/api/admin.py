from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(personal)
admin.site.register(conference)
admin.site.register(journal)
admin.site.register(book_chapter)
admin.site.register(book_editor)
admin.site.register(consultancy_project)
admin.site.register(patent)


from django.contrib.auth.admin import UserAdmin
from .models import Account


class AccountAdmin(UserAdmin):
    list_display = ('email','date_joined', 'last_login', 'is_admin','is_staff')
    search_fields = ('email', )
    readonly_fields=('date_joined', 'last_login')
    ordering = ('email',)
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()


admin.site.register(Account, AccountAdmin)
