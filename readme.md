# A quirk of web application model



## Project Background
Local iframe is used to add local content into an empty iframe. This local iframe has the same origin with its cloest parent.
However, this may result in some quirk of web application model. Filter list rule from Ad blocker extension or Brave Shields
need to correctly find the origin of the content that needs hiding or blocking. In this project, a variety of test cases
involves local iframe and various web tools wlll be test to see how wide this problem is.



## Web Tools and Extensions
These web tools and extensions will be applied to each test case in this project.
- [ ] [Ad guard](https://adguard.com/en/welcome.html)
- [ ] [Ad block](https://getadblock.com/en/)
- [ ] [Brave Shields](https://brave.com/shields/)
- [ ] [Brave](https://brave.com/zh/)
- [ ] [Chrome](https://www.google.com/chrome/)
- [ ] [Firefox](https://www.mozilla.org/en-US/firefox/new/)
- [ ] [DuckDuckGo](https://duckduckgo.com/)
- [ ] [Safari](https://www.apple.com/safari/)
## Filter list rule syntax
- [ ] [Filter list rule](https://adguard.com/kb/general/ad-filtering/create-own-filters/)
## Test Case Demo
Test cases in this project includes about:blank, about:local iframe, blob:document iframe, scriptlet(a piece of javascript code) injection.
Only Demo case is shown here, including how above mentioned iframe are created, how nested iframes are created etc.
Other cases tested in project are just variant of these cases,
for example, a request with given URL is replaced with div element used in demo case.
If everything is listed, it can be redundant and hard to read. 
Moreover, every visual structure of test case is shown under the folder test case structure. 






