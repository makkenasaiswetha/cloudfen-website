import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourfocus',
  templateUrl: './ourfocus.component.html',
  styleUrls: ['./ourfocus.component.css']
})
export class OurfocusComponent implements OnInit {
  cards = [
    {
      title: 'BIGDATA',
      img: 'assets/images/tech/bigdata.jpg'
    },
    {
      title: 'DATABASE',
      img: 'assets/images/tech/database.jpg'
    },
    {
      title: 'NETWORKING',
      img: 'assets/images/tech/networking.jpg'
    },
    {
      title: 'SALESFORCE',
      img: 'assets/images/tech/salseforce.jpg'
    },
    {
      title: 'CLOUD',
      img: 'assets/images/tech/cloud.png'
    },
    {
      title: 'SAP',
      img: 'assets/images/tech/sap.png'
    },
    {
      title: 'UI',
      img: 'assets/images/tech/ui.jpg'
    },
    {
      title: 'QA/BA',
      img: 'assets/images/tech/qa.jpeg'
    },
    {
      title: 'TIBCO',
      img: 'assets/images/tech/tibco.png'
    },
    {
      title: 'MACHINE LEARNING',
      img: 'assets/images/tech/machine.jpg'
    },
    {
      title: 'MULESOFT',
      img: 'assets/images/tech/mulesoft.png'
    },
    {
      title: 'LINUX',
      img: 'assets/images/tech/linux.png'
    },
    {
      title: 'JAVA',
      img: 'assets/images/tech/java.jpg'
    },
    {
      title: 'DEVOPS',
      img: 'assets/images/tech/devops.png'
    },
    {
      title: 'DATA SCIENCE',
      img: 'assets/images/tech/datascience.jpeg'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
