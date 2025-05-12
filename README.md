<h1 >Automation UI project</h1>

## :bookmark_tabs: Сontent

- <a href="#tools">Technology Stack</a>

- <a href="#cases">Automated Checks</a>

- <a href="#console">Run tests from the command line</a>

- <a href="#github">Running tests in GitHub Actions</a>

- <a href="#jenkins">Running tests in Jenkins</a>

- <a href="#allure">Test reports in Allure Report</a>

- <a href="#testops">Integration with TestOps</a>

- <a href="#telegram">Notifications in Telegram using a bot</a>

- <a href="#video">Example of a test run in Playwright</a>

<a id="tools"></a>

## Technology Stack

| JavaScript                                                                                                    | VS Code                                                                                                                             | GitHub                                                                                                    | Playwright                                                                                                         | Allure                                                                                                          | TestOps                                                                                                       | Telegram                                                                                                        |                                                                                                         Jenkins |
| :------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------: |
| <a href="https://nodejs.org/en"><img src="src/images/JavaScript.svg" width="50" height="50"  alt="Java"/></a> | <a id ="tech" href="https://code.visualstudio.com/"><img src="src/images/VSCode Image.png" width="50" height="50"  alt="IDEA"/></a> | <a href="https://github.com/"><img src="src/images/gitHub.svg" width="50" height="50"  alt="Github"/></a> | <a href="https://playwright.dev/"><img src="src/images/playwright.svg" width="50" height="50"  alt="JUnit 5"/></a> | <a href="https://allurereport.org/"><img src="src/images/allure.png" width="50" height="50"  alt="Gradle"/></a> | <a href="https://qatools.ru/"><img src="src/images/test-ops.png" width="50" height="50"  alt="Selenide"/></a> | <a href="https://telegram.org/"><img src="src/images/telegram.svg" width="50" height="50"  alt="Selenoid"/></a> | <a href="https://www.jenkins.io/"><img src="src/images/jenkins.svg" width="50" height="50"  alt="Jenkins"/></a> |

<a id="cases"></a>

## :ballot_box_with_check: Automated Checks

- :small_blue_diamond: Create X-Challenger token - @POST token (201)
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

### Create & open allure-report locally

```
npm run create-report
npm run open-report
```

<a id="github"></a>

## <img src="src/images/gitHub.svg" width="25" height="25"/></a> Running tests in GitHub Actions

<p align="center">

<a href="https://jenkins.autotests.cloud/job/AD_demo_ui_steam/"><img src="src/images/gitgub-actions.png" alt="GitHub"/></a>

> The workflow is configured for manual triggering via GitHub Actions.

</p>

<a id="jenkins"></a>

## <img src="src/images/jenkins.svg" width="25" height="25"/></a> Running tests in Jenkins

<a target="_blank" href="https://jenkins.autotests.cloud/job/002-niki.heartj-steam/
/">Workflow in Jenkins</a>

<p align="center">

<a href="https://jenkins.autotests.cloud/job/AD_demo_ui_steam/"><img src="src/images/jenkins_dashboard.png" alt="Jenkins"/></a>

> To start running the tests, you need to log in to the Jenkins website, navigate to the job, and click "Build Now." After the pipeline is completed, Allure report will be generated, and the test results will be sent to Allure TestOps and Telegram.

</p>

<a id="allure"></a>

## <img src="src/images/allure.png" width="25" height="25"/></a> Test reports in [Allure Report](https://nikiheartj.github.io/Steam-UI/17/index.html#graph)

### Main window

<p align="center">
<img title="Allure Overview Dashboard" src="src/images/allure-main.png">
</p>

### Graphs window

<p align="center">
<img title="Allure Graphs" src="src/images/allure-graph.png">
</p>

### Tests

> Each check is accompanied by a screenshot of the last action in the test, record & trace.

<p align="center">
<img title="Allure Tests" src="src/images/test-cases-report.png">
</p>

<a id="testops"></a>

## <img src="src/images/test-ops.png" width="25" height="25"/></a> Integration with [TestOps]()

> Test runs can be visualized as charts.

<p align="center">
<img title="Allure TestOps" src="src/images/testo-ops-dashboard.png">
</p>

> Test cases stay up-to-date since scenarios are extracted from the code.

<p align="center">
<img title="Allure TestOps" src="src/images/testcases-test-ops.png">
</p>

<a id="telegram"></a>

## <img src="src/images/telegram.svg" width="25" height="25"/></a> Notifications in Telegram using a bot

<p >
<img title="telegram bot" src="src/images/notification.png">
</p>

<a id="video"></a>

## <img src="src/images/playwright.svg" width="25" height="25"/></a> Playwright Test Run Example

> Test run recording: "Add a game to the shopping cart".

<p align="center">
  <img title="Playwright Record" src="src/images/test.gif">
</p>
