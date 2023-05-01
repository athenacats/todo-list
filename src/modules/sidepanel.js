export default function sidePanelFunction() {
  const sidePanel = document.querySelector(".sidePanel");

  const topPanel = document.createElement("div");
  topPanel.classList.add("topPanel");
  sidePanel.appendChild(topPanel);

  const inbox = document.createElement("div");
  inbox.setAttribute("id", "inbox");
  const icon1 = document.createElement("div");
  icon1.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>';
  inbox.appendChild(icon1);
  const text1 = document.createElement("h3");
  text1.textContent = "Inbox";
  inbox.appendChild(text1);
  topPanel.appendChild(inbox);

  const today = document.createElement("div");
  today.setAttribute("id", "today");
  const icon2 = document.createElement("div");
  icon2.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>';
  today.appendChild(icon2);
  const text2 = document.createElement("h3");
  text2.textContent = "Today";
  today.appendChild(text2);
  topPanel.appendChild(today);
}
