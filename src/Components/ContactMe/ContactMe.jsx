import React from 'react';
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
    // Define handleEmailClick within the ContactMe component
    const handleEmailClick = (clickedEmail) => {
        const emailInput = document.getElementById('emailInput');
        if (emailInput) {
          emailInput.value = clickedEmail;
        }
    
        window.open(`mailto:${clickedEmail}`);
      };

    return (
        <section className='contact-container'>
            <h5>Contact Me</h5>

            <div className="contact-content">
                <div style={{ flex: 1 }}>
                    <ContactInfoCard
                        iconUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACyElEQVR4nO1YWU8TURSeH6LP/gOTGSwpuKBGY1wTgktitNNibaBKDFUrhdhgCC6IttCiIcYIBbqRzHQBUlokmpiilEJb/oIa8Z0cc+8w1ULrTNfpw/2S72nu8n3nnnPu5FIUAQEBAQEBQZ1Bpwrs19DcNEvzv1mGB0VJYw0eLcMfkC2eZbgfigtncqmh+Z9Im6QBfVPIr7RYtgANzSGvpAHXi43t/pvLiotld7Hv2keYfJ7cljQwO7YJiKPmr6BXhxQXfksdBLspjjUhShqwtMXAbUvhwa6hDeg+G1FM/L0zCzDxbB1r8djT0Ht1SdoAmtjREoZxawJP9Ds3YVD/GbQNgZoJ1zbwgNLY5xCi/u5JAown5vA3WQbERZDwWWdGWKQ/AZ3HwlUXbzgcgje937LBGzJ+AZ3qb/BkGxBpurAIUy+FlHLb0mC5vFQ18ebWKLhfpfFeM8MpeHgpumdM0QYQbzeFYOyREBVEe3cc2huDFRPergrgSKOIo/Xf9q2C4Uj+0y7JgJhS1uvL4BsRIvRhMAldp+bLFn/n5Dy8H0jiNX2ODAxoPwH7n3or2YDIu3jDNbyhdzSDiw2ZK7W3e3cCMvF0HbpOL0jOKdsAoq4xiI9cTCknujOa5aeUXh2EkfvxXSkpr8tVxIDIntYozLwWIjg9nIIHFxcl55jORfD9gnu7LQ2WK7GiTq2iBhA7joZh/HEit+0dyl9DqC37s215DTpbhN6uqAFBXGCPOOPxuVyT1lUhZZyZgiZZpQxk0+N8BKZ20gP9jvS0xTDFXxP0DY0pZw+qmgbyFahIh3mlqEJnlTLwb4v02DPZVlupdalaGRDvDMRKrknV0kA1SBEDDDkBqG4K0XXwFsQUIvdLTg14lBfK56WG5iYlDaAXMPSIVHfiGe77jYPcPkr+6xzv0jD8lvLC+S0UedniCQgICAgICKja4Q9Q0XrpelkkTwAAAABJRU5ErkJggg=="
                        text="zaidyoutub0@outlook.com"
                        onEmailClick={handleEmailClick}
                        link="https://www.gmail.com"
                    />
                    <ContactInfoCard
                        iconUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGOElEQVR4nO2ZWUxUZxiGT7Q2ARHLLuuwK6sMLtWmSdPLNuldjaZNet+kSdM2qY1eTNIiyC6LMsPIziAdFgUE2dW2SdtUEWSYfV+YgVnArTICvs0ZO5GwzDnMDNgmvMlcnXPxfP//ne9//3cIYkc72pHHOsXHbuaQ9WTWoO3c4QFrR0a/dSrzlsWW3mt5kXbTTP5saT2zgpTu2Y6Urtlzh7pMJwgWdhFvWkf7rdFZQ7aLzME5fdagDYcHbMjstyLzlhUZfVak91qQftOCtB4zUrvNSOkyI+XGLA5dn8XBTpMuqcOUl9hhidp28KxfHodkD9s4zGGbnTk0h83DzyC5YwbJ7TNIbDPZE/jGqmSeIXhb4I+MzH/GHLFZmcNz8BQ+qc2ERL4JiT8bEX/NaIlvNZ7ZOvB72HNkZJ6bPTIHb8MntDoKQFzLNOKaDewjnHt7vAvfbfDNHp3r23J43jRimw2IaTL0hnMMvt6Bv4c92wnPaDKA0WhATJ1uKJUveNvzArajbXir4Ov1iK7TI6pWW+URfPbo/OdvDl6HqBodIria027BHxt6FMQctpnfJHzkVS3CqzXWcI4bI/bVnN/KaaMHo0EDRqNuQ/gILlmAFuFs9eVNwWfctkR545BaA98yjdgGNRhcMT7iS/HtkAZH64SIqVFvDM/RIKxKYw/nKGJoF+CwB96Eb9Ejrl4BZoMQBb8boJx7DqfahRZEVUk2hD/AJgtQI/SyOo8ePQu7mINzOm/AJ7RoEVcrxcftMvAEZjxfXMZqdYqsiLwidgkfdkWN0EqVnuBjNyX/v67SfXi+EQk8LZLrRPh6WI0x01O4Uu2DGUSy5a7hL6sRUqlCYLniOHX7OCyxG/BtRiQ2K3GcJ8bFPwyYfvICdHR+VIMIjpISPrhChaByxQ+UBWT2Wzs3A5/ENyCxSYFPuxXokduwuPxyDeQT+xJ+/FUL2/PFNc9Ot0sdBVDBB5crEXRJ2UZZQEa/RUAJT646X4eUZim+Gta4bJM/DU/wfsND5P6mW/d5NleAcI6aGr5MicBLyofUO9BnsW4If92Eg3wt3uPLUHbftO6Krlz1s6NqRJf9Bc5907rvPHuxjAMl43ThEVCqMFPvQJ/Fvgb+xgwOtapxpk+FAdU8ll6ubZOVuqt5hBONQjCqJtE4MbvhexOmpzhwSUAXHgHFigXKAtJ7zfbVK5/Mk4MvsbqEdq7696MaMKpFiGVPgS+0uHy/fcqMsHIxPfgSBd4pktMooMdsXd3zSc1yVI6Z8GydOe7UHXLVm0Rg1MgQxxGiR2qjLPjCXR1CK2T04Ivl2F8op24hMj1YM206jEi6pkZ6kwRfDqlxQ2qD5e9X/a95tIBvhtWIvSp1eJtErghDyjnQ0RcdUoRVyOnBF8nhXyCj/ohTu2Y7XR5S1/RIaFQgtkaE+OopMLhCxNarEdukQzRbiC4arebUu9WTCK1Q0ILfXyjHvgIZ9RglcxvarpJneH0NrNcgrXqS8gN3amFxGWEFYwipUNKC9y+QwS9fepayADJ0csvPN+gRXSXCd4Mq2JeoixDMPENw4Tht+H35Mvjkio/RMnMHO2a0bl1GarUOY/ZhwxQeGF17oHaBGUFFAtrwfhclGtppHpmYeXQNZCsQVTaBn+5oYV9af3Ll3NYiqFhEE16KvXnSXIKuyLiPTMzcvQY6jBlb5TikPqidxMQ6u/FJoxBBJVJa8H65kgWfHEkksRmRcZ/b8E5jRl5EyiWIKBpD3t3Xu2F8bEdI3hgCS+XU8HlS+F6QVhCbVSpfGxjfajS7Db/SHlQoEFw0ibTycZwfUOHklXEE5E/Shbf4scTu5aZkVukxvPOQKlciuFSCwPyHCMgXIKBERgm/N1cKnxzxKcITkVmlx/CbGJV+K+B9cySVhMfiY3dMk/76dsP7XBDfJFi33/K8AIIgyKA1ul7fu23wOeIeguWlcNcpMvIms8ptaRuWl1Z+PZFZZQRXY/Y2vG+uZNbjD5Z2ERX6IDLuC2NrFjyGz5UskHPenyUIJLZbgVXaSDIxC6lUazcPL9GS9mDTJ+yWiIVdZOhE5jZk9EGmBwGlcmtAicL+TrHcvr9QZvUvlE2Qfp60xA5X+V/4m3VHOyL+//oHp9RefhzsK9wAAAAASUVORK5CYII="
                        text="@textmaker1001"
                        link="https://t.me/textmaker1001"
                    />
                    <ContactInfoCard
                        iconUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEVElEQVR4nO1ZXVAbVRTOqPWhj/48+fOoj87o6NAn33R803Ey7eD4oLA33JtSq3ZKpWNjqwIWRx8s8lO1TtXWUlvHYjHeG4hQ+kPlodS0QktpCYRSIQVNkAQKxzmHJNNIMLvJJhtncmbOZE/27u733XPuuWfP2mxFKUpRshZ7q/1OppzrmBTVmhJHNCkuaErcZFLMoy4fcx+ewzHlsqLE5XLdYbNauJs/pClRp0kxxpQAQyr5KFO8ttxb+WDegb/SXnm/JkUzUyJqGPhKjWpKNDIvuy8v4JmqKGVKBE0AnqSa5FOax7khd8D72Bqm+F6zgbOVodWEzzIX/DG2lknRnnPwKuYNxY/jM82b+TyCZwlPCGVvtd+dPYF8hI1azROiMSvw5Uq8ZBV4llC+PiPwTuW8l0kxaT0BEcwoxcbyvNXgIbYeGgyBx93RpE3KLI0yxR7WP/tK1BUAaEhWXqsLPBZZy3WK1YBFkmK9hUVjWgJUVa5yk6b+Fuj0e6F77ARs7a7OOwmHx/FUegJSVKe6+NDgYbhddp5+zwpPbNPhAX401cVD01cI+HeXjkJ1zw4QHZssCCN+WIcHuO/fF177cwSit6JEYGJ2guy4do120+/+i1/T2NbBI2R/4fsSGs41wcDNQbgenoCTgdOwtfstGjP59yTMzs9Ch98LofkQHaN6RjrJfvdMzSok+HkdHlhZKuMDFxYXiMB0ZCbJPjBwiH4vTw/R2PHwOCzBUiLkxsPX4cx4L42/MXsDNnZuhvB8mM5FbkWJLI5HmVuYI9t1aldqAlJM6iGQMv/7//LTQz749UOyx0IBsmvP7iavLC4tQt3ZevpveOYq+KYu0HH7VTd8dfEAAUP59FxzgkB930d0r/hkvN9b998hpHgkJwR+GGqj45HYmIMDrTAaGqPjQCiQFHKf/7YvQaAqlsniBDb/ssUUAkGjBLb37EiEAXriza4q6AmcWvbAsBvePvkO/HxNwTe/H4TKztfTEnj52zJ47JmnYV3ps7hwDYZQikWcjgDaV2aGycbQQRvBTc0Fk1LvpenLUOHZmJbA8/Ub4JHHS+DRJ0rg1TaH0UWcOo029rdQLG/p2kZ2U/9esnG20a7p3U327Rlkk/cN2OfbD8eHf6LQiadezE7N5z8DZ8drsXu1kB0/r7k5PLf9RXjh49JM0mjqjawgVPKqtASw6WQ5ULXqIn5SVzGnKeG3GixbqSO6u3lYuhZe+IgaXeAL8YVGUzzi8DgesBkRavcVAHhGyj+xGZUyd9k9hfBSr0k+lXHfFHuVVhNgkttt2Qj1Ki2LfbHHZsrHCym+t4DAjy6v666sCZAXjrG11HDNX9i0mdbcTZDoY2vykZk0JfaYNvMpiSi+PjfZif+R9YI12DdtwA0m+xnnEczzmLZt+RbcHbHsyKR2omukqDG8w+ZCsMjCphP2bbBmxxeP2JtdNKZBJkU/nZO8CqvKgvjMWpSi2P7/8g8YE4NmXb5vGgAAAABJRU5ErkJggg=="
                        text="https://www.fiverr.com/textmaker1001"
                        link="https://www.fiverr.com/textmaker1001"
                    />
                          <ContactInfoCard
                        iconUrl="data:image/png;base64,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"
                        text="Jordhan M."
                        link="https://www.upwork.com/freelancers/~01e3f2107b91eae27a"
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactMe;