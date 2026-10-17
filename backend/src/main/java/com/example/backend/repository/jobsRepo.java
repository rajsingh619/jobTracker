package com.example.backend.repository;

import com.example.backend.model.jobClass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.time.LocalDate;
import java.util.List;


@Repository
public class jobsRepo {

    private final JdbcTemplate jdbcTemplate;
    @Autowired
    public jobsRepo(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    String sql = "SELECT * FROM jobs";

    public List<jobClass> getJobs(){
        return jdbcTemplate.query(sql,(rs,rowNum)->new jobClass(
                rs.getInt("jobid"),
                rs.getString("jobcompany"),
               rs.getString("jobrole"),
                rs.getDate("jobapplicationdate").toLocalDate(),
                rs.getString("jobstatus"),
                rs.getString("jobnextstep")
        ));
    }

    public int addjob(jobClass job) {
        int jobId = job.getJobId();
        String jobCompanyName = job.getJobCompany();
       String jobRole = job.getJobRole();
       LocalDate jobApplicationDate = job.getJobApplicationDate();
       String jobStatus = job.getJobStatus();
       String jobNextStep = job.getJobNextStep();
        String sql = """
                INSERT INTO jobs 
                (jobid,jobcompany,jobrole,jobapplicationdate,jobstatus,jobnextstep)
                 VALUES(?,?,?,?,?,?)
                 """; //this is a text block
        return jdbcTemplate.update(sql,jobId,jobCompanyName,jobRole,jobApplicationDate,jobStatus,jobNextStep);

    }

    public jobClass getJob(int jobId) {
        String sql = "SELECT * FROM jobs where jobid=?";
        return jdbcTemplate.queryForObject(sql,(rs,rowNum)->new jobClass(
                rs.getInt("jobid"),
                rs.getString("jobcompany"),
                rs.getString("jobrole"),
                rs.getDate("jobapplicationdate").toLocalDate(),
                rs.getString("jobstatus"),
                rs.getString("jobnextstep")
        ),jobId);
    }

    public int updatejob(jobClass job) {
        String sql = "UPDATE jobs SET jobid=?, jobcompany=?, jobrole=?, jobapplicationdate=?,jobstatus=?,jobnextstep=? WHERE jobid=? ";
        return jdbcTemplate.update(sql,job.getJobId(),job.getJobCompany(),job.getJobRole(),job.getJobApplicationDate(),job.getJobStatus(),job.getJobNextStep(),job.getJobId());
    }

    public int deletejob(int jobId) {
        String sql = "DELETE FROM jobs where jobid=?";
        return jdbcTemplate.update(sql,jobId);
    }
}
