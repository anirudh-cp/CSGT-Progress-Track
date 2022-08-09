from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(personal)
admin.site.register(conference)
admin.site.register(journal)
admin.site.register(book)
admin.site.register(consultancy)
admin.site.register(patent)
admin.site.register(industrial_interaction)
admin.site.register(project)


from django.contrib.auth.admin import UserAdmin
from .models import account


class account_admin(UserAdmin):
    list_display = ('email','date_joined', 'last_login', 'is_admin','is_staff')
    search_fields = ('email', )
    readonly_fields=('date_joined', 'last_login')
    ordering = ('email',)
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()
    add_fieldsets = (
    (None, {
        'classes': ('wide',),
        'fields': ('email', 'password1', 'password2'),
    }),
)


admin.site.register(account, account_admin)
