from django.db import models

from django.db import models
from userFolder.models import Account
from seekerFolder.models import AllProfile


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
    allprofile = models.ForeignKey(
        AllProfile, on_delete=models.CASCADE, related_name='job_poster')
    job_title = models.CharField(max_length=255, null=True, blank=True)
    emp_type = models.CharField(max_length=255, null=True, blank=True)
    req_expi = models.CharField(max_length=255, null=True, blank=True)
    req_educ = models.CharField(max_length=255, null=True, blank=True)
    job_desc = models.TextField(null=True, blank=True)
    contact_info = models.CharField(max_length=255, null=True, blank=True)
    app_duedate = models.CharField(max_length=255, null=True, blank=True)
    skills = models.CharField(max_length=255, null=True, blank=True)
    qualifications = models.TextField(null=True, blank=True)
    responsibilities = models.TextField(null=True, blank=True)
    benefits = models.TextField(null=True, blank=True)
    salary = models.CharField(max_length=255, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=100, null=True, blank=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    location = models.CharField(max_length=255, null=True, blank=True)

    def save(self, *args, **kwargs):
        self.name = self.allprofile.name
        super().save(*args, **kwargs)

    @classmethod
    def get_jobs_with_profile(cls, profile_id):
        return cls.objects.filter(allprofile=profile_id)


class Applicants(models.Model):
    job = models.ForeignKey(
        JobPost, on_delete=models.CASCADE, related_name='applicants', null=True, blank=True)
    applicant = models.ForeignKey(
        AllProfile, on_delete=models.CASCADE, null=True, blank=True)
    applied = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    custom_key = models.CharField(
        max_length=10, null=True, blank=True, unique=True)
    sched = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=255, null=True, blank=True)

    # applicount = models.IntegerField(null=True, blank=True)

    def save(self, *args, **kwargs):
        self.custom_key = f'{self.job.id}-{self.applicant.account}'
        super().save(*args, **kwargs)
