package com.example.backend.model;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
@Scope("prototype")
public class jobClass {
    private int jobId;
    private String jobCompany;
    private String jobRole;
    private LocalDate jobApplicationDate;
    private String jobStatus;
    private String jobNextStep;

    public jobClass(int jobId, String jobCompanyName, String jobRole, LocalDate jobApplicationDate, String jobStatus, String jobNextStep) {
        this.jobId = jobId;
        this.jobCompany = jobCompanyName;
        this.jobRole = jobRole;
        this.jobApplicationDate = jobApplicationDate;
        this.jobStatus = jobStatus;
        this.jobNextStep = jobNextStep;
    }

    public int getJobId() {
        return jobId;
    }

    public void setJobId(int jobId) {
        this.jobId = jobId;
    }

    public String getJobCompany() {
        return jobCompany;
    }

    public void setJobCompany(String jobCompany) {
        this.jobCompany = jobCompany;
    }

    public String getJobRole() {
        return jobRole;
    }

    public void setJobRole(String jobRole) {
        this.jobRole = jobRole;
    }

    public LocalDate getJobApplicationDate() {
        return jobApplicationDate;
    }

    public void setJobApplicationDate(LocalDate jobApplicationDate) {
        this.jobApplicationDate = jobApplicationDate;
    }

    public String getJobStatus() {
        return jobStatus;
    }

    public void setJobStatus(String jobStatus) {
        this.jobStatus = jobStatus;
    }

    public String getJobNextStep() {
        return jobNextStep;
    }

    public void setJobNextStep(String jobNextStep) {
        this.jobNextStep = jobNextStep;
    }
}
