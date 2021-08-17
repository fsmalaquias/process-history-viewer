
export default class CamundaRoutes{
  static BaseURL: string = String(process.env.REACT_APP_BASE_URL);

  static getProcessInstancePath() {
    console.log('getProcessInstancePath', process.env);
    return `${this.BaseURL}/engine-rest/history/process-instance`;
  }

  static getProcessInstanceActivityListPath(processInstanceId: string) {
    return `${this.BaseURL}/engine-rest/history/activity-instance?processInstanceId=${processInstanceId}&sortBy=startTime&sortOrder=asc`;
  }
}