import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import 'react-notifications-component/dist/theme.css';
import {
  useHistory, useParams
} from "react-router-dom";
import TopMenu from '../components/TopMenu';
import CamundaService from '../services/camunda.service';
import Utils from "../utils/utils";

interface ProcessInstanceDetailURLParams {
  id: string;
  order: string;
};

export default function ProcessInstanceDetail() {
  const [activityList, setActivityList] = useState([]);
  const [variablesList, setVariablesList] = useState([]);

  const history = useHistory();

  const { id, order } = useParams<ProcessInstanceDetailURLParams>();

  useEffect(() => {
    const getActivityList = async (processInstanceId: string) => {
      const resActivityList: any = await CamundaService.getActivityList(processInstanceId);
      console.log('Activities: ', resActivityList);
      setActivityList(resActivityList);
      const resVariablesList: any = await CamundaService.getProcessInstanceVariables(processInstanceId);
      console.log('Variables: ', resVariablesList);
      setVariablesList(resVariablesList);
    }

    console.log('ProcessInstanceId: ', id);
    getActivityList(id);

  }, [id]);

  return (
    <>
      <TopMenu />
      <Container>
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
            <h2>Business Key: {order}</h2>
            <Button onClick={() => history.goBack()}>Back</Button>
          </Col>
        </Row>
        <Row>
          <Col><h2>Activities</h2></Col>
        </Row>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Activity</th>
              <th>Start</th>
              <th>End</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {activityList?.map((item: any) => {
              return (
                <tr key={item.id}>
                  <td>{item.activityId}</td>
                  <td>{item.activityName}</td>
                  <td>{Utils.formatDate(item.startTime)}</td>
                  <td>{Utils.formatDate(item.endTime)}</td>
                  <td style={{ textAlign: 'right' }}>{item.durationInMillis / 1000}s</td>
                </tr>
              )
            })}

          </tbody>
        </Table>
        <Row>
          <Col><h2>Variables</h2></Col>
        </Row>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {variablesList?.map((item: any) => {
              return (
                <tr key={item.id}>
                  <td>{item?.name}</td>
                  <td>{item?.value ? JSON.stringify(item.value) : ''}</td>
                </tr>
              )
            })}

          </tbody>
        </Table>
      </Container>
    </>
  )
}