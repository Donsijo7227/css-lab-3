document.addEventListener('DOMContentLoaded', () => {
    // Select all tab elements and attach event listeners
    document.querySelectorAll('.tabs li[role="tab"]').forEach(tab => {
        // Add click event listener to each tab
        tab.addEventListener('click', () => {
            // Get the ID of the tab panel associated with the clicked tab
            const tabpanelId = tab.querySelector('a').getAttribute('href').substring(1);
            // Find the corresponding tab panel element
            const tabpanel = document.getElementById(tabpanelId);
            // Find the currently active tab and tab panel
            const activeTab = document.querySelector('.tabs li[aria-selected="true"]');
            const activeTabpanel = document.querySelector('.tabs div[role="tabpanel"][aria-hidden="false"]');

            if (tabpanel && activeTab && activeTabpanel) {
                // Deactivate the currently active tab and tab panel
                activeTab.setAttribute('aria-selected', 'false');
                activeTabpanel.setAttribute('aria-hidden', 'true');
            }

            // Activate the clicked tab and its associated tab panel
            tab.setAttribute('aria-selected', 'true');
            tabpanel && tabpanel.setAttribute('aria-hidden', 'false');
        });
    });
});
