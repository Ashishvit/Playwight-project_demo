# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: my_tcs\cookies_demo.spec.ts >> Login and save cookies
- Location: tests\my_tcs\cookies_demo.spec.ts:8:5

# Error details

```
TimeoutError: locator.fill: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Username' })

```

```
Error: browserContext.close: Protocol error (Browser.removeBrowserContext): can't access property "_maybeDontRestoreTabs", this._windows[aWindow.__SSi] is undefined
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - text:         
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]: 
        - text: Dashboard Welcome
      - generic [ref=e8]:
        - generic [ref=e9]: 
        - text: Cookie
    - generic [ref=e10]:
      - generic [ref=e11]: 
      - text: You are authenticated via cookie.
    - generic [ref=e12]:
      - paragraph [ref=e13]:
        - generic [ref=e14]: 
        - strong [ref=e15]: "Logged in as:"
        - generic [ref=e16]: admin
      - paragraph [ref=e17]:
        - generic [ref=e18]: 
        - strong [ref=e19]: "Session:"
        - generic [ref=e20]: Persistent
      - paragraph [ref=e21]:
        - generic [ref=e22]: 
        - strong [ref=e23]: "Storage:"
        - generic [ref=e24]: Cookie (7d)
      - generic [ref=e25]:
        - generic [ref=e26]: 
        - text: Active session
    - separator [ref=e27]
    - generic [ref=e28]:
      - generic [ref=e29]: 
      - text: Close/reopen tab to test persistence.
    - button " Logout & clear storage" [ref=e30] [cursor=pointer]:
      - generic [ref=e31]: 
      - text: Logout & clear storage
```