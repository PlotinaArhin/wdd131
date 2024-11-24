// Function to calculate Wind Chill
function calculateWindChill(temp, speed) {
    // Check if conditions are met: Temperature <= 10°C and Wind Speed > 4.8 km/h
    if (temp <= 10 && speed > 4.8) {
      // Wind Chill formula (metric system)
      return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
      ).toFixed(1); // Round to 1 decimal place
    }
    return "N/A"; // If conditions are not met
  }
  
  // Static input values for temperature and wind speed
  const temperature = 5; // °C
  const windSpeed = 10; // km/h
  
  // Calculate wind chill using the function
  const windChill = calculateWindChill(temperature, windSpeed);
  
  // Display wind chill in the Weather section
  document.getElementById("windchill").textContent = windChill;
  
  // Display current year in the footer
  document.getElementById("year").textContent = new Date().getFullYear();
  
  // Display the last modified date
  const lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = `LAST DATE MODIFIED: ${lastModified}`;
  