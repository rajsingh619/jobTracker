package com.example.backend.model;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
@Scope("prototype")
public class jobClass {
    private int jobId;
    private String jobCompanyName;
    private String jobDescription;
    private String jobRole;
    private LocalDate jobapplicationDate;

    public jobClass(int jobId, String jobCompanyName, String jobDescription, String jobRole, LocalDate jobapplicationdate) {
        this.jobId = jobId;
        this.jobCompanyName = jobCompanyName;
        this.jobDescription = jobDescription;
        this.jobRole = jobRole;
        this.jobapplicationDate = jobapplicationdate;
    }

    public int getJobId() {
        return jobId;
    }

    public void setJobId(int jobId) {
        this.jobId = jobId;
    }

    public String getJobCompanyName() {
        return jobCompanyName;
    }

    public void setJobCompanyName(String jobCompanyName) {
        this.jobCompanyName = jobCompanyName;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }

    public String getJobRole() {
        return jobRole;
    }

    public void setJobRole(String jobRole) {
        this.jobRole = jobRole;
    }

    public LocalDate getJobapplicationDate() {
        return jobapplicationDate;
    }

    public void setJobapplicationDate(LocalDate jobapplicationDate) {
        this.jobapplicationDate = jobapplicationDate;
    }
}
