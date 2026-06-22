import React from 'react';

const dashboardStats = [
  {
    label: "Today's Appointments",
    value: "02",
    valueColorClass: "db-color-olive-dark",
    iconBgClass: "db-bg-olive-light",
    iconTextClass: "",
    iconSrc: "/images/dash-appointments.svg",
    actionText: "View all appointments",
    link: "#"
  },
  {
    label: "Pending Notes",
    value: "03",
    valueColorClass: "db-color-alert-red",
    iconBgClass: "db-bg-alert-red-light",
    iconTextClass: "db-text-alert-red-bold",
    iconSrc: "/images/dash-pending-notes.svg",
    actionText: "Go to notes",
    link: "#"
  },
  {
    label: "Total Earning",
    value: "$890",
    valueColorClass: "db-color-olive-dark",
    iconBgClass: "db-bg-olive-net",
    iconTextClass: "",
    iconSrc: "/images/dash-total-earning.svg",
    actionText: "View all",
    link: "#"
  },
  {
    label: "Net Earning",
    value: "$750",
    valueColorClass: "db-color-olive-dark",
    iconBgClass: "db-bg-olive-net",
    iconTextClass: "",
    iconSrc: "/images/dashg-net-earning.svg",
    actionText: "View all",
    link: "#"
  }
];

const upcomingSessions = [
  {
    name: "John Doe",
    subtext: "Anxiety & work stress",
    avatar: "/images/dash-user-icon.svg",
    day: "Today",
    time: "10:00 AM",
    statusText: "Online",
    statusBadgeClass: "dbt-badge-online",
    actionButtonText: "Start Session",
    actionButtonClass: "dbt-btn-filled"
  },
  {
    name: "Emma Watson",
    subtext: "Depression",
    avatar: "/images/dash-user-icon.svg",
    day: "Today",
    time: "14:30 PM",
    statusText: "In-Person",
    statusBadgeClass: "dbt-badge-inperson",
    actionButtonText: "View Details",
    actionButtonClass: "dbt-btn-outlined"
  },
  {
    name: "Michael Brown",
    subtext: "Relationship issues",
    avatar: "/images/dash-user-icon.svg",
    day: "Tommorrow",
    time: "11:00 AM",
    statusText: "Online",
    statusBadgeClass: "dbt-badge-online",
    actionButtonText: "View Details",
    actionButtonClass: "dbt-btn-outlined"
  },
  {
    name: "Sophie Lee",
    subtext: "Anxiety",
    avatar: "/images/dash-user-icon.svg",
    day: "Tommorrow",
    time: "16:00 PM",
    statusText: "Online",
    statusBadgeClass: "dbt-badge-online",
    actionButtonText: "View Details",
    actionButtonClass: "dbt-btn-outlined"
  },
  {
    name: "Daniel Smith",
    subtext: "Stress management",
    avatar: "/images/dash-user-icon.svg",
    day: "May 24, 2026",
    time: "09:30 AM",
    statusText: "In-Person",
    statusBadgeClass: "dbt-badge-inperson",
    actionButtonText: "View Details",
    actionButtonClass: "dbt-btn-outlined"
  }
];

const sessionsNeedingNotes = [
  {
    name: "Olivia Johnson",
    subtext: "May 19, 2026  •  11:00 AM",
    avatar: "/images/dash-user-icon.svg",
    dueIn: "22h 45m"
  },
  {
    name: "William Davis",
    subtext: "May 18, 2026  •  16:30 PM",
    avatar: "/images/dash-user-icon.svg",
    dueIn: "36h 15m"
  },
  {
    name: "Ava Martinez",
    subtext: "May 18, 2026  •  10:00 AM",
    avatar: "/images/dash-user-icon.svg",
    dueIn: "41h 20m"
  }
];

const reservedSlots = [
  {
    name: "Olivia Johnson",
    subtext: "Anxiety",
    avatar: "/images/dash-user-icon.svg",
    day: "May 20, 2026",
    time: "10:00 AM",
    expiresIn: "14m 32s",
    expiresClass: "dbt3-countdown-text dbt3-color-urgent"
  },
  {
    name: "Emma Watson",
    subtext: "Depression",
    avatar: "/images/dash-user-icon.svg",
    day: "May 21, 2026",
    time: "11:30 AM",
    expiresIn: "2h 18m",
    expiresClass: "dbt3-countdown-text"
  },
  {
    name: "Michael Brown",
    subtext: "Relationship issues",
    avatar: "/images/dash-user-icon.svg",
    day: "May 22, 2026",
    time: "13:00 PM",
    expiresIn: "23h 48m",
    expiresClass: "dbt3-countdown-text"
  },
  {
    name: "Sophie Lee",
    subtext: "Anxiety",
    avatar: "/images/dash-user-icon.svg",
    day: "May 23, 2026",
    time: "16:00 PM",
    expiresIn: "21h 05m",
    expiresClass: "dbt3-countdown-text"
  }
];

const recentPayments = [
  {
    name: "Olivia Johnson",
    avatar: "/images/dash-user-icon.svg",
    day: "May 20, 2026",
    time: "10:00 AM",
    amount: "$50"
  },
  {
    name: "Emma Watson",
    avatar: "/images/dash-user-icon.svg",
    day: "May 21, 2026",
    time: "11:30 AM",
    amount: "$50"
  },
  {
    name: "Michael Brown",
    avatar: "/images/dash-user-icon.svg",
    day: "May 22, 2026",
    time: "13:00 PM",
    amount: "$50"
  },
  {
    name: "Sophie Lee",
    avatar: "/images/dash-user-icon.svg",
    day: "May 23, 2026",
    time: "16:00 PM",
    amount: "$50"
  }
];

const Dashboard = () => {
  return (
    <>
      <main className="gl-content-body">
        <div className="dashboard-wrp-sec">
          <div className="db-card-wrapper-layout">
            {dashboardStats.map((stat, index) => (
              <div className="db-card-item-box" key={index}>
                <div className="db-card-top-row">
                  <div className="db-card-info-block">
                    <span className="db-card-label-text">{stat.label}</span>
                    <span className={`db-card-main-value ${stat.valueColorClass}`}>{stat.value}</span>
                  </div>
                  <div className={`db-card-icon-badge ${stat.iconBgClass} ${stat.iconTextClass}`}>
                    <img src={stat.iconSrc} alt="" />
                  </div>
                </div>
                <a href={stat.link} className="db-card-action-link">
                  {stat.actionText} <span className="db-card-link-arrow">&gt;</span>
                </a>
              </div>
            ))}
          </div>

          <div className="dbt-main-wrapper">
            <div className="dbt-section-left">
              <div className="dbt-panel-header">
                <div className="dbt-header-title">
                  <span className="dbt-icon-circle dbt-bg-olive">
                    <img src="/images/dashboard-tbl-icon.svg" alt="" />
                  </span>
                  <h2 className="dbt-heading-text">Upcoming Sessions</h2>
                </div>
                <a href="#" className="dbt-view-all-link">
                  View all <span className="dbt-arrow">&gt;</span>
                </a>
              </div>

              <table className="dbt-data-table">
                <tbody>
                  {upcomingSessions.map((session, index) => (
                    <tr className="dbt-table-row" key={index}>
                      <td className="dbt-col-profile">
                        <img src={session.avatar} alt="User" className="dbt-avatar" />
                        <div className="dbt-profile-info">
                          <span className="dbt-name">{session.name}</span>
                          <span className="dbt-subtext">{session.subtext}</span>
                        </div>
                      </td>
                      <td className="dbt-col-time">
                        <span className="dbt-day">
                          <img src="/images/table-date-inner-icon.svg" alt="" /> {session.day}
                        </span>
                        <span className="dbt-time">{session.time}</span>
                      </td>
                      <td className="dbt-col-status">
                        <span className={`dbt-badge ${session.statusBadgeClass}`}>● {session.statusText}</span>
                      </td>
                      <td className="dbt-col-action">
                        <button className={session.actionButtonClass}>{session.actionButtonText}</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="dbt-section-right">
              <div className="dbt-panel-header">
                <div className="dbt-header-title">
                  <span className="dbt-icon-circle dbt-bg-olive">
                    <img src="/images/sessions-needing-notes.svg" alt="" />
                  </span>
                  <h2 className="dbt-heading-text">Sessions Needing Notes</h2>
                </div>
              </div>

              <div className="dbt-notes-container">
                {sessionsNeedingNotes.map((note, index) => (
                  <div className="dbt-note-card" key={index}>
                    <table className="dbt-inner-note-layout">
                      <tbody>
                        <tr>
                          <td style={{ width: "50%" }}>
                            <img src={note.avatar} alt="User" className="dbt-avatar" style={{ verticalAlign: "middle" }} />
                            <div className="dbt-profile-info" style={{ verticalAlign: "middle" }}>
                              <span className="dbt-name">{note.name}</span>
                              <span className="dbt-subtext">{note.subtext}</span>
                            </div>
                          </td>
                          <td style={{ width: "25%", textAlign: "left" }}>
                            <span className="dbt-due-label">Due in</span>
                            <span className="dbt-due-countdown">{note.dueIn}</span>
                          </td>
                          <td style={{ width: "25%", textAlign: "right" }}>
                            <button className="dbt-btn-maroon">Create Notes</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ))}

                <div className="dbt-alert-banner">
                  <span className="dbt-alert-icon">
                    <img src="/images/note-icon-inner-table.svg" alt="" />
                  </span>
                  <span className="dbt-alert-text">Notes must be created within 48 hours after session ends.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="dbt-main-wrapper">
            <div className="dbt-section-left">
              <div className="dbt-panel-header">
                <div className="dbt-header-title">
                  <span className="dbt-icon-circle dbt-bg-olive">
                    <img src="/images/clock-icon-inner-table-dash.svg" alt="" />
                  </span>
                  <h2 className="dbt-heading-text">
                    Reserved Slots <span className="dbt3-sub-heading-text">(Awaiting Payment)</span>
                  </h2>
                </div>
                <a href="#" className="dbt-view-all-link">
                  View all <span className="dbt-arrow">&gt;</span>
                </a>
              </div>

              <table className="dbt-data-table">
                <tbody>
                  {reservedSlots.map((slot, index) => (
                    <tr className="dbt-table-row" key={index}>
                      <td className="dbt-col-profile">
                        <img src={slot.avatar} alt="User" className="dbt-avatar" />
                        <div className="dbt-profile-info">
                          <span className="dbt-name">{slot.name}</span>
                          <span className="dbt-subtext">{slot.subtext}</span>
                        </div>
                      </td>
                      <td className="dbt-col-time">
                        <span className="dbt-day">
                          <img src="/images/table-date-inner-icon.svg" alt="" /> {slot.day}
                        </span>
                        <span className="dbt-time">{slot.time}</span>
                      </td>
                      <td className="dbt3-col-countdown">
                        <span className="dbt3-expire-label">Expires in</span>
                        <span className={slot.expiresClass}>{slot.expiresIn}</span>
                      </td>
                      <td className="dbt-col-action">
                        <button className="dbt-btn-outlined">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="dbt-section-right">
              <div className="dbt-panel-header">
                <div className="dbt-header-title">
                  <span className="dbt-icon-circle dbt-bg-olive">
                    <img src="/images/payment-icon-inner-table-dash.svg" alt="" />
                  </span>
                  <h2 className="dbt-heading-text">
                    Recent Payments <span className="dbt3-sub-heading-text">(Last 5)</span>
                  </h2>
                </div>
                <a href="#" className="dbt-view-all-link">
                  View all <span className="dbt-arrow">&gt;</span>
                </a>
              </div>

              <table className="dbt-data-table">
                <thead>
                  <tr className="dbt3-th-row">
                    <th className="dbt3-th-cell" style={{ width: "45%", textAlign: "left", paddingLeft: "16px" }}>
                      Patient Name
                    </th>
                    <th className="dbt3-th-cell" style={{ width: "35%", textAlign: "left" }}>
                      Date
                    </th>
                    <th className="dbt3-th-cell" style={{ width: "20%", textAlign: "right", paddingRight: "16px" }}>
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentPayments.map((payment, index) => (
                    <tr className="dbt-table-row" key={index}>
                      <td style={{ paddingLeft: "16px" }}>
                        <img src={payment.avatar} alt="User" className="dbt-avatar" />
                        <div className="dbt-profile-info">
                          <span className="dbt-name">{payment.name}</span>
                        </div>
                      </td>
                      <td>
                        <span className="dbt-day">
                          <img src="/images/table-date-inner-icon.svg" alt="" /> {payment.day}
                        </span>
                        <span className="dbt-time">{payment.time}</span>
                      </td>
                      <td className="dbt3-amount-cell">{payment.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
