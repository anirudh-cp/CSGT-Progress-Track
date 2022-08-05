# Database Naming Conventions

The following naming conventions have been followed in the application and must be followed in future releases as well.

- Singular, lowercase table names such as `faculty`.
- Explicit and simple field names.
- Singular, lowercase field names separated by underscore ('-') such as `first_name`
- Use prefixes, suffixes sparingly only to increase readability.
- Choices variable for a field must share the name of the field, be in all caps and declared as a list with each tuple having the same value unless absolutely necessary such as `FOOD = [('Apple', 'Apple'), ('Orange', 'Orange')]`. 
- Constraints named as `[constraint type]_[field1]_[field2]_[relation name]` 