import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService, IEvent } from '../events/index';
import { observable } from 'rxjs';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 0px;}
     @media (max-width: 1000px) { .nav-icon {display:inline-block}
    #coll {
      display: none;
        }
    .drop-menu {
      float: right;
      display: block;

    }

    .list-down {
     border-style:none;
     border-width: 0.5px; 
     background-color: 	rgb(61, 82, 92);
     width: 90%;
     margin-left: 15px;

    }

    .list-down > a {
      color: white;
    }
    }
    li > a.active { color: #F97924; }
     @media (min-width: 1000px) {.nav-icon {display:none}
     .drop-menu {display:none}
     .caret-div {display: none}
    }

    .bars {
      position: absolute;
      right: 15px;
    background:none;
      border:none;
      outline: none;
      top:0.2rem;
  }

    .nav-icon {
      margin: em;
      width: 40px;
    }
     .nav-icon:after, 
.nav-icon:before, 
.nav-icon div {
  
  background-color: #fff;
  border-radius: 0px;
  content: '';
  display: block;
  height: 4px;
  margin: 7px 0;
/*  transition: all .2s ease-in-out;*/
}

  `]
})
export class NavBarComponent {
  searchTerm = '';
  foundSessions: ISession[];
  isButtonVisible = false;


  events: IEvent[];
  


  constructor(public auth: AuthService, private eventService: EventService) {

  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    });
  }

  getEvents() {
    this.eventService.getEvents().subscribe(Event => {
      this.events = Event;


    });
  }

  toggleDiv() {
    this.isButtonVisible = !this.isButtonVisible;
  
  }

}
