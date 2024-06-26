function calculateAge() {
    const BornDate = parseInt(document.getElementById("BornDate").value);
    const BornMonth = parseInt(document.getElementById("BornMonth").value);
    const BornYear = parseInt(document.getElementById("BornYear").value);
    const CurrentDate = parseInt(document.getElementById("CurrentDate").value);
    const CurrentMonth = parseInt(document.getElementById("CurrentMonth").value);
    const CurrentYear = parseInt(document.getElementById("CurrentYear").value);

    let year = 0, month = 0, days = 0;
    let result = "";

    if (CurrentMonth > BornMonth) {
        year = CurrentYear - BornYear;
        if (CurrentDate > BornDate || CurrentDate === BornDate) {
            days = CurrentDate - BornDate;
            month = CurrentMonth - BornMonth;
        } else {
            if (BornMonth === 1 || BornMonth === 3 || BornMonth === 5 || BornMonth === 7 || BornMonth === 8 || BornMonth === 10 || BornMonth === 12) {
                days = CurrentDate + 31 - BornDate;
                month = CurrentMonth - BornMonth - 1;
            } else if (BornMonth === 2) {
                days = CurrentDate + 28 - BornDate;
                month = CurrentMonth - BornMonth - 1;
            } else {
                days = CurrentDate + 30 - BornDate;
                month = CurrentMonth - BornMonth - 1;
            }
        }
        result = `Your Exact Age is ${year} Years, ${month} Months and ${days} Days.`;
    }

    if (CurrentMonth === BornMonth) {
        if (BornDate === CurrentDate) {
            year = CurrentYear - BornYear;
            result = `Your Exact Age is ${year} Years, 0 Months and 0 Days.<br>Today you turned ${year}. HAPPY BIRTHDAY!!!`;
        } else if (BornDate > CurrentDate) {
            if (BornMonth === 1 || BornMonth === 3 || BornMonth === 5 || BornMonth === 7 || BornMonth === 8 || BornMonth === 10 || BornMonth === 12) {
                days = CurrentDate + 31 - BornDate;
                month = CurrentMonth - BornMonth - 1;
            } else if (BornMonth === 2) {
                days = CurrentDate + 28 - BornDate;
                month = CurrentMonth - BornMonth - 1;
            } else {
                days = CurrentDate + 30 - BornDate;
                month = CurrentMonth - BornMonth - 1;
            }

            year = CurrentYear - BornYear - 1;
            result = `Your Exact Age is ${year} Years, 11 Months and ${days + 1} Days.<br>In just ${BornDate - CurrentDate} days you will turn ${year + 1}.`;
        } else {
            year = CurrentYear - BornYear;
            result = `Your Exact Age is ${year} Years, 0 Months and ${CurrentDate - BornDate} Days.<br>You turned ${year} just ${CurrentDate - BornDate} days before.`;
        }
    }

    if (BornMonth > CurrentMonth) {
        year = CurrentYear - BornYear - 1;
        month = 12 - BornMonth + CurrentMonth;
        if (CurrentDate > BornDate) {
            result = `Your Exact Age is ${year} Years, ${month} Months and ${CurrentDate - BornDate} Days.`;
        } else if (CurrentDate === BornDate) {
            result = `Your Exact Age is ${year} Years, ${month} Months and 0 Days.`;
        } else {
            if (BornMonth === 1 || BornMonth === 3 || BornMonth === 5 || BornMonth === 7 || BornMonth === 8 || BornMonth === 10 || BornMonth === 12) {
                days = CurrentDate + 31 - BornDate;
            } else if (BornMonth === 2) {
                days = CurrentDate + 28 - BornDate;
            } else {
                days = CurrentDate + 30 - BornDate;
            }
            result = `Your Exact Age is ${year} Years, ${month} Months and ${days} Days.`;
        }
    }

    document.getElementById("result").innerHTML = result;
}
