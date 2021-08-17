
export default class CamundaRoutes{
  static BaseURL: string = String(process.env.REACT_APP_BASE_URL);

  static getProcessInstancePath(sortBy: string = 'startTime', sortOrder: string = 'desc') {
    console.log('getProcessInstancePath', process.env);
    return `${this.BaseURL}/engine-rest/history/process-instance?sortBy=${sortBy}&sortOrder=${sortOrder}`;
  }

  static getProcessInstanceActivityListPath(processInstanceId: string, sortBy: string = 'startTime', sortOrder: string = 'asc') {
    return `${this.BaseURL}/engine-rest/history/activity-instance?processInstanceId=${processInstanceId}&sortBy=${sortBy}&sortOrder=${sortOrder}`;
  }

  //TODO: Create Enums for sorting and ordering fields
  //instanceId, definitionId, definitionKey, definitionName, definitionVersion, businessKey, startTime, endTime, duration and tenantId
}