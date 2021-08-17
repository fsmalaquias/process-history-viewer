import CamundaRoutes from '../services/camunda.routes';
import { SortBy, SortOrder } from './camunda.enum';

export default class CamundaService{
  static getProcessInstance(orderId: string = '', sortBy: SortBy = SortBy.StartTime, sortOrder: SortOrder = SortOrder.Descending){
    return fetch(CamundaRoutes.getProcessInstancePath(orderId, sortBy, sortOrder))
      .then(response => response.json());
  }

  static getActivityList(processInstanceId: string, sortBy: SortBy = SortBy.StartTime, sortOrder: SortOrder = SortOrder.Descending){
    return fetch(CamundaRoutes.getProcessInstanceActivityListPath(processInstanceId))
      .then(response => response.json());
  }
}