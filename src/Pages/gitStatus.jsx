 
import GitHubCalendar from "react-github-calendar";
import "./git.css";
 
function GitCalender() {
  const colorTheme = {
    background: "transparent",
    text: "#1976d2",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };

  return (
    <div className="gitbag">
      
        <div className="gtitle2"><span>Git Hub Stats</span></div>
        <div className="gitstaus">
        
          <div className="imgdiv">
          <img
             
             src="https://github-readme-stats.vercel.app/api?username=mr-ashu&show_icons=true&locale=en"
             alt="mr-ashu"
           />
         
          </div >
          
           <div className="imgdiv">
           <img
              

              src="https://github-readme-streak-stats.herokuapp.com/?user=h-unique245"
              alt="mr-ashu"
            />
           </div>
          
        </div>
        <div className="git_calender">
          <GitHubCalendar
            username="mr-ashu"
            blockSize={18}
            blockMargin={5}
            fontSize={16}
            showWeekdayLabels
            theme={colorTheme}
          ></GitHubCalendar>
        </div>
      </div>
   
  );
}

export default GitCalender;
