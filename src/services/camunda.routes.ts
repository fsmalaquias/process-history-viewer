const BASE_URL = 'http://api.k8s.pontoslivelo.com.br/oms-orchestrator';

export default class CamundaRoutes{
  static getProcessInstancePath() {
    return `${BASE_URL}/engine-rest/history/process-instance`;
  }

  static getProcessInstanceActivityListPath(processInstanceId: string) {
    return `${BASE_URL}/engine-rest/history/activity-instance?processInstanceId=${processInstanceId}&sortBy=startTime&sortOrder=asc`;
  }
}