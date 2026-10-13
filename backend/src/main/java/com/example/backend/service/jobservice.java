package com.example.backend.service;

import com.example.backend.model.jobClass;
import com.example.backend.repository.jobsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class jobservice {
    private jobsRepo jobsRepo;

    @Autowired
    public jobservice(jobsRepo jobsRepo) {
        this.jobsRepo = jobsRepo;
    }

    public List<jobClass> getAlljobs(){
        return jobsRepo.getJobs();
    }

    public int addjob(jobClass job){
        return jobsRepo.addjob(job);
    }

    public jobClass getjob(int jobId) {
        return jobsRepo.getJob(jobId);
    }

    public int updatejob(jobClass job){
        return jobsRepo.updatejob(job);
    }

    public int deletejob(int jobId){
        return jobsRepo.deletejob(jobId);
    }
}
