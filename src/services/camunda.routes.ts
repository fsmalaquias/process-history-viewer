
import { SortBy, SortOrder } from "./camunda.enum";

export default class CamundaRoutes{
  static BaseURL: string = String(process.env.REACT_APP_BASE_URL);

  static getProcessInstancePath(sortBy: string = SortBy.StartTime, sortOrder: string = SortOrder.Descending) {
    console.log('getProcessInstancePath', process.env);
    return `${this.BaseURL}/engine-rest/history/process-instance?sortBy=${sortBy}&sortOrder=${sortOrder}`;
  }

  static getProcessInstanceActivityListPath(processInstanceId: string, sortBy: string = SortBy.StartTime, sortOrder: string = SortOrder.Ascending) {
    return `${this.BaseURL}/engine-rest/history/activity-instance?processInstanceId=${processInstanceId}&sortBy=${sortBy}&sortOrder=${sortOrder}`;
  }

}