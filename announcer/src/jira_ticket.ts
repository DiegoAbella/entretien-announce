/**
 * Simplified interface to issue from jira.js
 */
import {Issue} from "jira.js/out/version2/models";

export interface JiraTicket {
  key(): string

  building(): string,

  summary(): string

  // todo: add "date created" / "age"
  // todo: add "creator", parsing from ticket body
}

export function proxyJiraJsIssue(issue: Issue): JiraTicket {

  const value = (maybeField: any): string | undefined => {
    if (maybeField && maybeField.value) {
      return maybeField.value
    } else {
      return undefined
    }
  }

  const parseBuilding = (): string => {
    const buildingFromField = value(issue.fields.customfield_10038);
    const summary = issue.fields.summary;
    if (buildingFromField) {
      return buildingFromField
    } else {
      const bldgRe = /^([0-9]+).*/
      if (summary) {
        const match = summary.match(bldgRe)
        if (match) {
          return match[1]
        }
      }
      return "unknown"
    }
  }

  return {
    key: () => issue.key,
    building: () => parseBuilding(),
    summary: () => issue.fields.summary
  }
}
