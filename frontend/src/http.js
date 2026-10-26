export async function getJobs(){
    const response = await fetch("http://localhost:8081/jobs");
    const resData =  await response.json();
    if(!response.ok){
        throw new Error("Not able to fetch the jobs")
    }
    return resData;
}