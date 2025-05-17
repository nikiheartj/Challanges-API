<h1 >Automation API project</h1>

## :bookmark_tabs: Сontent

- <a href="#tools">Technology Stack</a>

- <a href="#cases">Automated Checks</a>

- <a href="#console">Run tests from the command line</a>

- <a href="#github">Running tests in GitHub Actions</a>

- <a href="#jenkins">Running tests in Jenkins</a>

- <a href="#allure">Test reports in Allure Report</a>

- <a href="#testops">Integration with TestOps</a>

- <a href="#telegram">Notifications in Telegram using a bot</a>
  <a id="tools"></a>

## Technology Stack

| JavaScript                                                                                                    | VS Code                                                                                                                             | GitHub                                                                                                    | Playwright                                                                                                         | Allure                                                                                                          |                                                                                                        Telegram |
| :------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| <a href="https://nodejs.org/en"><img src="src/images/JavaScript.svg" width="50" height="50"  alt="JScr"/></a> | <a id ="tech" href="https://code.visualstudio.com/"><img src="src/images/VSCode Image.png" width="50" height="50"  alt="VSco"/></a> | <a href="https://github.com/"><img src="src/images/gitHub.svg" width="50" height="50"  alt="Github"/></a> | <a href="https://playwright.dev/"><img src="src/images/playwright.svg" width="50" height="50"  alt="Playwri"/></a> | <a href="https://allurereport.org/"><img src="src/images/allure.png" width="50" height="50"  alt="Allure"/></a> | <a href="https://telegram.org/"><img src="src/images/telegram.svg" width="50" height="50"  alt="Telegram"/></a> |

<a id="cases"></a>

## :ballot_box_with_check: Automated Checks

- :small_blue_diamond: Create X-Challenger token. @POST
- :small_blue_diamond: @GET the list of todos
- :small_blue_diamond: Create a todo with max out content. @POST
- :small_blue_diamond: Retrieve the current todos database for the user. @GET
- :small_blue_diamond: Full update a todo's fields via @PUT method
- :small_blue_diamond: @GET todos list with a query filter
- :small_blue_diamond: @DELETE a todo in the todos list

<a id="console"></a>

## :computer: Run tests from the command line

### Running tests locally

```
npm t
```

### Open allure-report locally

```
npm run open-report
```

<a id="github"></a>

## <img src="src/images/gitHub.svg" width="25" height="25"/></a> Running tests in GitHub Actions

<p align="center">

<a href="https://jenkins.autotests.cloud/job/AD_demo_ui_steam/"><img src="src/images/gitgub-actions.png" alt="GitHub"/></a>

> The workflow is configured for manual triggering via GitHub Actions, and you can always set up the relevant environment for your tests.

</p>

<a id="allure"></a>

## <img src="src/images/allure.png" width="25" height="25"/></a> Test reports in [Allure Report](https://nikiheartj.github.io/Challenges-API/26/index.html)

### Main window

<p align="center">
<img title="Allure Overview Dashboard" src="src/images/mainAllure.png">
</p>

### Graphs window

<p align="center">
<img title="Allure Graphs" src="src/images/graphsAllure.png">
</p>

### Tests

> Each check is accompanied by a screenshot of the last action in the test, record & trace.

<p align="center">
<img title="Allure Tests" src="src/images/suitsAllure.png">
</p>

<a id="telegram"></a>

## <img src="src/images/telegram.svg" width="25" height="25"/></a> Notifications in Telegram using a bot

<p >
<img title="telegram bot" src="src/images/notification.png">
</p>
