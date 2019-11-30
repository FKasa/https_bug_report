# https_bug_report
This demo extension has been created solely to test for a bug in the way chrome hanldes requests with chrome.webRequest

-------

Link to test: [test page](https://account.lycamobile.mk/quicktopup-direct.aspx?lang=en)

Steps to easily reproduce the bug:

1.  disable this extention (if already installed)
2.  open the page from the link above
3.  open the Chrome Dev tools for that page and switch to the Network tab (clear the log if needed)
4.  Install this extension, enable if already installed
5.  Open the Chrome Dev tools inpector for the background page of the extension (it should say "https\_bug\_report loaded")
6.  go to page you opened from the link above (dev tools should be open there as well)
7.  open the filter menu by clicking the funnel icon
8.  write "angular-" whithout the quotes there in the filter field
9.  clear the network log by clicking the stop sign next to the funnel icon
10.  press and hold the refresh button, move to the "empty cache and hard reload" option and release
11.  once the page has finished loading, you should see four files in the log - one in red
12.  in the console of the background page however, there are only entries for three files
13.  there isn't even an loadding error reported by onErrorOccurred

Conclusion
==========

Requests towards http source requested on https pages are completely innaccessible by extension. I understand the security reasons for blocking them. The extension I was trying to build was solving this exact issue: switching from http to https for sources that are known to have the secure version available.
