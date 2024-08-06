import React from "react";
import "./RightMainConten.css";

const RightMainContent = () => {
  return (
    <div className="right_main_content">
      <div className="chart_scetion_container">
        <div className="employee_turnover_container">
          <div>
            <div className="turn_over_rate_cntainer">
              <p className=" turn_over_rate_text">Employee Turnover Rate</p>
            </div>
            <div className="per_container">
              <p className="per_text"> 25%</p>
            </div>
            <div className="registraion_container">
              <p className="registration_text">
                Resignation in last 90 Days: 0
              </p>
            </div>
          </div>
          <div className="chart1_container">
            <div className="chart1_rate_container">
              <p className="chart1_rate_text"> Rate (%)</p>
            </div>
            <img src="./Line 33.png" alt="" className="chart1_ver" />
            <img src="./Line 34.png" alt="" className="chart1_hor" />
            <div className="chart1_ver_value_container30">
              <p className="chart1_ver_value_text">30</p>
            </div>
            <div className="chart1_ver_value_container20">
              <p className="chart1_ver_value_text">20</p>
            </div>
            <div className="chart1_ver_value_container10">
              <p className="chart1_ver_value_text">10</p>
            </div>
            <div className="chart1_ver_value_container0">
              <p className="chart1_ver_value_text">0</p>
            </div>
            <img src="./Rectangle 60.png" alt="" className="rectangle60" />
            <img src="./Rectangle 61.png" alt="" className="rectangle61" />

            <div className="container_2021">
              <p className="text_2021">2021</p>
            </div>

            <div className="container_2022">
              <p className="text_2022">2022</p>
            </div>

            <div className="year_container">
              <p className="year_text">year</p>
            </div>
          </div>
        </div>

        <div className="total_employeee_container">
          <div>
            <div className="total_employee_container">
              <p className="total_employee_text">Total Employees</p>
            </div>
            <div className="count_container">
              <p className="count_text">123</p>
            </div>
            <div className="men_women_wrapper">
              <div className="men_container">
                <p className="men_text">Men : 101</p>
              </div>
              <div className="spe_container"></div>
              <div className="women_container">
                <p className="women_text">Female : 22 </p>
              </div>
            </div>
          </div>
          <div className="main_sep"></div>
          <div className="employee_type_container">
            <div className="fulltime_employee_container">
              <p className="fulltime_employee_text">
                Full-time Employees : 100
              </p>
            </div>
            <div className="contract_employee_container">
              <p className="contract_employee_text">Contract Employees : 23</p>
            </div>
          </div>
        </div>

        <div className="employee_turnover_container">
          <div>
            <div className="turn_over_rate_cntainer">
              <p className=" turn_over_rate_text">Overall Attendance</p>
            </div>
            <div className="per_container">
              <p className="per_text"> 89%</p>
            </div>
            <div className="registraion_container">
              <p className="registration_text">Attendance Performance</p>
            </div>
          </div>
          <div className="chart1_container">
            <div className="chart1_rate_container">
              <p className="chart1_rate_text"> Rate (%)</p>
            </div>
            <img src="./Line 33.png" alt="" className="chart1_ver" />
            <img src="./Line 34.png" alt="" className="chart1_hor" />
            <div className="chart1_ver_value_container30">
              <p className="chart1_ver_value_text">100</p>
            </div>
            <div className="chart1_ver_value_container20">
              <p className="chart1_ver_value_text">60</p>
            </div>
            <div className="chart1_ver_value_container10">
              <p className="chart1_ver_value_text">30</p>
            </div>
            <div className="chart1_ver_value_container0">
              <p className="chart1_ver_value_text">0</p>
            </div>
            <img src="./Rectangle 85.png" alt="" className="rectangle60" />
            <img src="./Rectangle 86.png" alt="" className="rectangle61" />

            <div className="container_2021">
              <p className="text_2021">2021</p>
            </div>

            <div className="container_2022">
              <p className="text_2022">2022</p>
            </div>

            <div className="year_container">
              <p className="year_text">year</p>
            </div>
          </div>
        </div>
      </div>

      <div className="table_wrapper">
        <div className="request_for_purchase_container">
          <div className="one">
            <div className="request_for_purchase_text_container">
              <p className="request_for_purchase_text">Request for Purchase</p>
            </div>
            <img src="./open-full.png" alt="" className="open_full_icon" />
          </div>
          <div>
            <table>
              <tr>
                <td className="request_id_container">
                  <div className="request_id_text_container">
                    <p className="request_id_text">Request ID</p>
                  </div>
                </td>

                <td className="requester_id_container">
                  <div className="requester_id_text_container">
                    <p className="requester_id_text">Requester</p>
                  </div>
                </td>

                <td className="subject_id_container">
                  <div className="subject_id_text_container">
                    <p className="subject_id_text">Subject</p>
                  </div>
                </td>

                <td className="duedate_container">
                  <div className="duedate_text_container">
                    <p className="duedate_text">Due Date</p>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="rq_container">
                  <div className="rq_text_container">
                    <p className="rq_text">RQ-002-2024</p>
                  </div>
                </td>
                <td className="name_of_container">
                  <div className="name_of_text_container">
                    <p className="name_of_text">Name Of Requested</p>
                  </div>
                </td>
                <td className="marrige_container">
                  <div className="marrige_text_container">
                    <p className="marrige_text">Marriage Leave Reques..</p>
                  </div>
                </td>

                <td className="date_container">
                  <div className="date_text_container">
                    <p className="date_text">21 Apr 2024</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="rq_container">
                  <div className="rq_text_container">
                    <p className="rq_text">RQ-002-2024</p>
                  </div>
                </td>
                <td className="name_of_container">
                  <div className="name_of_text_container">
                    <p className="name_of_text">Name Of Requested</p>
                  </div>
                </td>
                <td className="marrige_container">
                  <div className="marrige_text_container">
                    <p className="marrige_text">Marriage Leave Reques..</p>
                  </div>
                </td>

                <td className="date_container">
                  <div className="date_text_container">
                    <p className="date_text">21 Apr 2024</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="rq_container">
                  <div className="rq_text_container">
                    <p className="rq_text">RQ-002-2024</p>
                  </div>
                </td>
                <td className="name_of_container">
                  <div className="name_of_text_container">
                    <p className="name_of_text">Name Of Requested</p>
                  </div>
                </td>
                <td className="marrige_container">
                  <div className="marrige_text_container">
                    <p className="marrige_text">Marriage Leave Reques..</p>
                  </div>
                </td>

                <td className="date_container">
                  <div className="date_text_container">
                    <p className="date_text">21 Apr 2024</p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="two">
            <div className="request_in_queue_container">
              <p className="request_in_queue_text">10 Requests in Queue</p>
            </div>
            <div>
              <div className="view_all_container">
                <p className="view_all_text">View All</p>
              </div>
            </div>
          </div>
        </div>
        <div className="upcoming_task_container">
          <div className="upcoming_task_text_container">
            <p className="upcoming_task_text">Upcoming Tasks</p>
          </div>
          <div>
            <img src="open-full.png" alt="" className="upcoming_icon" />
          </div>
        </div>
      </div>

      <div className="three">
        <div className="upcoming_evens_container">
          <div className="upcoming_task_text_container">
            <p className="upcoming_task_text">Upcoming Events</p>
          </div>
          <div>
            <img src="open-full.png" alt="" className="upcoming_icon" />
          </div>
        </div>

        <div className="upcoming_net_container">
          <div className="upcoming_task_text_container">
            <p className="upcoming_task_text">Net Income</p>
          </div>
          <div>
            <img src="open-full.png" alt="" className="upcoming_icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightMainContent;
