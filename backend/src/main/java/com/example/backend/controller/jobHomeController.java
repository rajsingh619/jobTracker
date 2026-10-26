package com.example.backend.controller;

import com.example.backend.model.jobClass;
import com.example.backend.service.jobservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class jobHomeController {

    private jobservice jobservice;
    @Autowired
    public jobHomeController(jobservice jobservice){
        this.jobservice=jobservice;
    }


    @GetMapping("jobs")
    public List<jobClass> jobs(){
        return jobservice.getAlljobs();
    }

    @GetMapping("jobs/{jobId}")
    public jobClass job(@PathVariable int jobId){
        return jobservice.getjob(jobId);
    }

    @PostMapping("jobs")
    public jobClass job(@RequestBody jobClass newJob){
        jobservice.addjob(newJob);
        return jobservice.getjob(newJob.getJobId());
    }

    @PutMapping("jobs")
    public jobClass updatejob(@RequestBody jobClass newJob){
        jobservice.updatejob(newJob);
        return jobservice.getjob(newJob.getJobId());
    }
    @DeleteMapping("jobs/{jobId}")
    public String deletejob(@PathVariable int jobId){
        jobservice.deletejob(jobId);
        return "Job Deleted Successfully";
    }

}
