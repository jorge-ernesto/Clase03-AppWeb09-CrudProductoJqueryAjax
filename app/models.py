from django.db import models

# Create your models here.


class Producto(models.Model):
    # definir campos
    producto = models.CharField(max_length=100)
    fecha = models.DateField()
    categoria = models.CharField(max_length=1)
    precio = models.DecimalField(max_digits=6, decimal_places=2)
    stock = models.IntegerField()
