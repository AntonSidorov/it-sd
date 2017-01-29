import { Component, HostListener, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('landing') landing;
  @ViewChild('scope') scope;
  @ViewChild('concepts') concepts;
  @ViewChild('unit3') unit3;
  @ViewChild('unit4') unit4;
  @ViewChild('assessments') assessments;
  @ViewChild('glossary') glossary;
  @ViewChild('psm') psm;

  onLanding = true;
  setup = false;

  navVis = [false, false, false, false, false, false, false];
  pages = ["#scope", "#concepts", "#unit3", "#unit4", "#assessments", "#glossary", "#psm"];

  navs = [
    ['Scope of study'],
    ['Key concepts:', 'Approaches to problem solving', 'Data and information', 'Digital systems', 'Interactions and impact'],
    ['Unit 3:', 'Outcome 1', 'Outcome 2'],
    ['Unit 4:', 'Outcome 1', 'Outcome 2'],
    ['Assessments: ', 'Unit 3', 'Unit 4', 'SAT', 'Exam'],
    ['Glossary'],
    ['Problem Solving Methodology']
  ];
  rects = [];

  definitions: Card[] = [
    {
      label: 'Application architecture',
      value: 'Application architecture is the process of identifying the components, and their interrelationships, of a structured (software) solution that meets all of the technical and operational requirements, while optimising common quality attributes such as performance, security and manageability.'
    },
    {
      label: 'Computational thinking',
      value: 'Computational thinking is a process of recognising aspects of computation in the world and being able to think logically, algorithmically, recursively and abstractly.'
    },
    {
      label: 'Data types',
      value: 'Data types are the particular forms that an item of data can take including numeric, character and Boolean, and are characterised by the kind of operations that can be performed on it. '
    },
    {
      label: 'Design brief',
      value: 'A design brief is a statement that contains an outline of a situation, context, problem, need or an opportunity, and constraints or conditions under which a solution must be developed.'
    },
    {
      label: 'Design principles',
      value: 'Design principles are accepted characteristics that contribute to the functionality and appearance of solutions.'
    },
    {
      label: 'Design thinking',
      value: 'Design thinking is a way of thinking critically and creatively to generate innovative ideas, evaluate them and precisely de ne the preferred solution so it can be created using a digital system.'
    },
    {
      label: 'Efficiency',
      value: 'Efficiency is a measure of how much time, cost and effort is applied to achieve intended results.'
    },
    {
      label: 'Effectiveness',
      value: 'Effectiveness is a measure of how well a solution, an information management strategy or a network work and whether each achieves its intended results.'
    },
    {
      label: 'Information architecture',
      value: 'Information architecture is the ways in which content (information and objects) is grouped, labelled and located in online solutions.'
    },
    {
      label: 'Information system',
      value: 'An information system is the combination of digital hardware and software components (digital systems), data, processes and people that interact to create, control and communicate ideas and digital solutions.'
    },
    {
      label: 'Legal requirements',
      value: 'There are legal requirements with which individuals and organisations are expected to comply, with respect to the ownership and privacy of information, and freedom of expression.'
    },
    {
      label: 'Normalisation',
      value: 'Normalisation is the process of ensuring that a database conforms to a set of normal forms. Its primary purpose is to remove redundancies that create threats to data integrity such as update anomalies. It also plays a role in making querying more ef cient.'
    },
    {
      label: 'Physical security controls',
      value: 'Physical security controls are the equipment and procedures used to assist in the protection of information systems and the files created, communicated and stored by individuals and organisations.'
    },
    {
      label: 'Security threats',
      value: 'Security threats are the actions, devices and events that threaten the integrity and security of data and information stored within, and communicated between, information systems. The threats can be accidental, such as losing a portable storage device containing files; deliberate, such as malware, phishing; and events-based such as a power surge.'
    },
    {
      label: 'Software requirements specification',
      value: 'Software requirements specification is a comprehensive description of the intended purpose and environment for purpose-designed software solutions. I'
    },
    {
      label: 'Software security controls',
      value: 'Software security controls are the software and procedures used to assist in the protection of information systems and the files created, communicated and stored by individuals and organisations.'
    },
    {
      label: 'Solution (digital)',
      value: 'A digital solution is the method of creating required digital output through the application of digital systems and processes that transforms data and information. '
    },
    {
      label: 'Systems thinking',
      value: 'Systems thinking is a management discipline that concerns an understanding of a system by examining the linkages and interactions between the components that comprise the entirety of that defined system.'
    },
    {
      label: 'Types of data',
      value: 'Types of data are general categories of data including text, number, sound and image (still and moving)'
    },
    {
      label: 'User experience',
      value: 'User experience is the overall experience of a person using an interactive solution, especially in terms of how easy or pleasing it is to use'
    },
    {
      label: 'User flow diagrams',
      value: 'A User flow diagram is diagram that denotes the path a user travels through when using an online interactive solution to complete a task or transaction'
    },
  ];

  constructor(private titleService: Title) { }
  title = 'app works!';

  ngOnInit() {
    //REVERSE SORT CUZ JAVASCRIPT SUCC's?
    this.definitions.sort((s1,s2) => s1.value.length > s2.value.length ? -1 : s1.value.length == s2.value.length ? 0 : 1);
  }

  ngAfterViewInit() {
    this.setup = true;
    setTimeout(() => {
      this.updateRects();
    }, 100);
  }

  updateRects() {
    this.rects[0] = this.landing.nativeElement.getBoundingClientRect();
    this.rects[1] = this.scope.nativeElement.getBoundingClientRect();
    this.rects[2] = this.concepts.nativeElement.getBoundingClientRect();
    this.rects[3] = this.unit3.nativeElement.getBoundingClientRect();
    this.rects[4] = this.unit4.nativeElement.getBoundingClientRect();
    this.rects[5] = this.assessments.nativeElement.getBoundingClientRect();
    this.rects[6] = this.glossary.nativeElement.getBoundingClientRect();
    this.rects[7] = this.psm.nativeElement.getBoundingClientRect();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    //Now all we have to do is just check which element is focused the most out of those
    this.updateRects();
    if (this.rects[0].top < 0) {
      if (this.onLanding) {
        this.onLanding = false;
      }
    }
    else {
      this.onLanding = true;
    }

    //PLEASE EXPLAIN, WHY IS I A FUCKING STRINGGGG????
    for (var i in this.navVis)
      this.navVis[i] = this.rects[+i + 1].top <= 0 && this.rects[+i + 1].bottom >= 0;
  }

  onnav(event) {
    this.jump(this.rects[event + 1].top);
    //this.scrollTo(this.pages[event + 1]);
  }

  jump(target) {
    // Robert Penner's easeInOutQuad - http://robertpenner.com/easing/
    function easing(t, b, c, d) {
      t /= d / 2
      if (t < 1) return c / 2 * t * t + b
      t--
      return -c / 2 * (t * (t - 2) - 1) + b
    }
    var
      start = window.pageYOffset,
      duration = 400,
      timeStart, timeElapsed;

    requestAnimationFrame(function (time) {
      timeStart = time;
      loop(time);
    });

    function loop(time) {
      timeElapsed = time - timeStart;
      window.scrollTo(0, easing(timeElapsed, start, target, duration));
      if (timeElapsed < duration)
        requestAnimationFrame(loop)
      else
        end();
    }
    function end() {
      window.scrollTo(0, start + target);
    }
  }
}

export class Card {
  label: string;
  value: string;
}
