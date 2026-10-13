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
                rs.getString("jobcompanyname"),
                rs.getString("jobdescription"),
                rs.getString("jobrole"),
                rs.getDate("jobapplicationdate").toLocalDate()
        ));
    }

    public int addjob(jobClass job) {
        int jobId = job.getJobId();
        String jobCompanyName = job.getJobCompanyName();
        String jobDescription = job.getJobDescription();
        String jobRole = job.getJobRole();
        LocalDate jobApplicationDate = job.getJobapplicationDate();
        String sql = """
                INSERT INTO jobs 
                (jobid,jobcompanyname,jobdescription,jobrole,jobapplicationdate)
                 VALUES(?,?,?,?,?)
                 """; //this is a text block
        return jdbcTemplate.update(sql,jobId,jobCompanyName,jobDescription,jobRole,jobApplicationDate);

    }

    public jobClass getJob(int jobId) {
        String sql = "SELECT * FROM jobs where jobid=?";
        return jdbcTemplate.queryForObject(sql,(rs,rowNum)->new jobClass(
                rs.getInt("jobid"),
                rs.getString("jobcompanyname"),
                rs.getString("jobdescription"),
                rs.getString("jobrole"),
                rs.getDate("jobapplicationdate").toLocalDate()
        ),jobId);
    }

    public int updatejob(jobClass job) {
        String sql = "UPDATE jobs SET jobid=?, jobcompanyname=?, jobdescription=?, jobrole=?, jobapplicationdate=? WHERE jobid=? ";
        return jdbcTemplate.update(sql,job.getJobId(),job.getJobCompanyName(),job.getJobDescription(),job.getJobRole(),job.getJobapplicationDate(),job.getJobId());
    }

    public int deletejob(int jobId) {
        String sql = "DELETE FROM jobs where jobid=?";
        return jdbcTemplate.update(sql,jobId);
    }
}
