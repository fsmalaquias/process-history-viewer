
import { SortBy, SortOrder } from "./camunda.enum";

export default class CamundaRoutes{
  static BaseURL: string = String(process.env.REACT_APP_BASE_URL);
  static CustomDetailURL:string = String(process.env.REACT_APP_CUSTOM_DETAIL_URL);

  static getProcessInstancePath(orderId: string = '', sortBy: SortBy = SortBy.StartTime, sortOrder: SortOrder = SortOrder.Descending, maxResults: Number = 30) {
    return `${this.BaseURL}/engine-rest/history/process-instance?sortBy=${sortBy}&sortOrder=${sortOrder}&maxResults=${maxResults}`;
  }

  static getProcessInstanceActivityListPath(processInstanceId: string, sortBy: string = SortBy.StartTime, sortOrder: string = SortOrder.Ascending) {
    return `${this.BaseURL}/engine-rest/history/activity-instance?processInstanceId=${processInstanceId}&sortBy=${sortBy}&sortOrder=${sortOrder}`;
  }

  static getCustomDetailURL(businessKey: string){
    return this.CustomDetailURL !== 'undefined' ? this.CustomDetailURL + businessKey : null;
  }

}