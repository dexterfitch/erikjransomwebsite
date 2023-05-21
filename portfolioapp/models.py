from django.db import models

class Link(models.Model):
    text = models.CharField(max_length=50)
    url = models.URLField(max_length=200)

    def __str__(self):
        return self.text
    
class CreditsCategory(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name + " (Category #" + str(self.pk) + ")"

class Credit(models.Model):
    title = models.CharField(max_length=200)
    note = models.CharField(max_length=200, blank=True)
    location = models.CharField(max_length=200)
    role = models.CharField(max_length=200)
    awards = models.CharField(max_length=200, blank=True)
    category = models.ForeignKey(CreditsCategory, on_delete=models.CASCADE)

    def __str__(self):
        return self.title + " - " + self.location + " - " + self.role

class Service(models.Model):
    body = models.TextField()
    acting = models.BooleanField(default=False)
    writing = models.BooleanField(default=False)

    def __str__(self):
        return self.body

class Experience(models.Model):
    body = models.TextField()
    acting = models.BooleanField(default=False)
    writing = models.BooleanField(default=False)

    def __str__(self):
        return self.body

class Dialect(models.Model):
    name = models.CharField(max_length=100)
    note = models.CharField(max_length=100)

    def __str__(self):
        return self.name + " (" + self.note + ")"

class Language(models.Model):
    name = models.CharField(max_length=100)
    note = models.CharField(max_length=100)

    def __str__(self):
        return self.name + " (" + self.note + ")"
    
class EquipmentTech(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name + " (EquipmentTech #" + str(self.pk) + ")"

class Equipment(models.Model):
    name = models.CharField(max_length=200)
    tech = models.ForeignKey(EquipmentTech, on_delete=models.CASCADE)
    default = models.BooleanField(default=False)

    def __str__(self):
        return self.name