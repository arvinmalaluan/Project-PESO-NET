from django.db import models

from django.db import models
from userFolder.models import Account


class RecruiterProfile(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    comp_name = models.CharField(max_length=255)
    bio = models.TextField()
    location = models.CharField(max_length=255)
    emp_count = models.CharField(max_length=255)
    subsidiaries_count = models.CharField(max_length=255)
    comp_overview = models.TextField()
    comp_overview = models.CharField(max_length=255)
    site_link = models.CharField(max_length=255)


class JobPost(models.Model):
    profile = models.ForeignKey(RecruiterProfile, on_delete=models.CASCADE)
    job_title = models.CharField(max_length=255)
    emp_type = models.CharField(max_length=255)
    req_expi = models.CharField(max_length=255)
    req_educ = models.CharField(max_length=255)
    job_desc = models.TextField()
    contact_info = models.CharField(max_length=255)
    app_duedate = models.CharField(max_length=255)
    qualifications = models.TextField()
    responsibilities = models.TextField()
    benefits = models.TextField()
    salary = models.CharField(max_length=255)
    created = models.DateTimeField(auto_now_add=True)
