from django.db import models

# Create your models here.
from django.db import models

class Dashboard(models.Model):
    SNO = models.IntegerField(max_length=10)
    ROLLNO = models.CharField(max_length=10)
    NAME = models.CharField(max_length=255)
    TECHNOLOGY1 = models.CharField(max_length=255)
    TECHNOLOGY2 = models.CharField(max_length=255)
    TECHNOLOGY3 = models.CharField(max_length=255)
    COMPANY = models.CharField(max_length=255)
    SALARY = models.DecimalField(max_digits=10, decimal_places=2)
    DATE = models.DateField()
    def __str__(self):
        return self.ROLLNO
