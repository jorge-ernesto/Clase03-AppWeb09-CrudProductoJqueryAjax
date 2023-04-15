from django.db import models

# Create your models here.

class Producto(models.Model):  # Modelo creado para ejecutar migraciones
    # Definir los datos de la clase (campos de la tabla)
    # Si no se especifica lo contrario, todos los campos seran requeridos por defecto, es decir NOT NULL
    producto = models.CharField(max_length=100)
    fecha = models.DateField()
    categoria = models.CharField(max_length=1)
    precio = models.DecimalField(max_digits=6, decimal_places=2)
    stock = models.IntegerField()

    def __str__(self):
        return str(self.__dict__)
