<template>
<div style="background: white !important;">
    <b-row>
        <b-col cols="4" offset="1" class="mt-4">
            <h1>Pending requests</h1>
            <div class="my-5" v-for="(pending_meeting,index) in this.pending_meetings" v-bind:key="pending_meeting.id">
                <b-row class="meeting-request">
                    <b-col cols="12" class="d-flex align-items-center my-3">
                        <img src="https://www.w3schools.com/w3css/img_lights.jpg" class="profile-picture rounded-circle mr-3">
                        <div class="d-flex flex-column">
                            <div class="d-flex mt-3">
                                <span class="mr-3"> Request from: </span>
                                <span> {{pending_meeting.user.first_name}} {{pending_meeting.user.last_name}} </span>
                            </div>
                            <div class="d-flex mt-3">
                                <span class="mr-3"> Meeting time: </span>
                                <span> {{pending_meeting.meeting_time}} </span>
                            </div>
                            <div class="d-flex mt-3">
                                <span class="mr-3"> Property link: </span>
                                <router-link :to="{name:'post', params:{id: pending_meeting.post_id}}">Proeprty Link</router-link>
                            </div>
                        </div>
                        <div class="d-flex flex-column ml-auto">
                            <b-btn variant="success" class="mb-3" v-on:click="acceptMeeting(pending_meeting.id)">Accept</b-btn>
                            <b-btn variant="danger" v-on:click="declineMeeting(pending_meeting.id)">Decline</b-btn>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </b-col>

        <b-col cols="4" offset="2" class="mt-4">
            <h1>Accepted requests</h1>
            <div class="my-5" v-for="(accepted_meeting,index) in this.accepted_meetings" v-bind:key="accepted_meeting.id">
                <b-row class="meeting-request">
                    <b-col cols="12" class="d-flex align-items-center my-3">
                        <img src="https://www.w3schools.com/w3css/img_lights.jpg" class="profile-picture rounded-circle mr-3">
                        <div class="d-flex flex-column">
                            <div class="d-flex mt-3">
                                <span class="mr-3"> Meeting with: </span>
                                <span> {{accepted_meeting.user.first_name}} {{accepted_meeting.user.last_name}} </span>
                            </div>
                            <div class="d-flex mt-3">
                                <span class="mr-3"> Meeting time: </span>
                                <span> {{accepted_meeting.meeting_time}} </span>
                            </div>
                            <div class="d-flex mt-3">
                                <span class="mr-3"> Property link: </span>
                                <router-link :to="{name:'post', params:{id: accepted_meeting.post_id}}">Proeprty Link</router-link>
                            </div>
                        </div>
                        <div class="d-flex flex-column ml-auto">

                        </div>
                    </b-col>
                </b-row>
            </div>
        </b-col>
    </b-row>
</div>
</template>

<script>
    import ApiHelper from '../apiHelper.js'

    export default {
      data(){
          return {
              pending_meetings: [],
              accepted_meetings: []
          }
      },
      created: function() {
        var self = this;
        this.getMeetingsInfo();
      },
      methods: {
        getMeetingsInfo:function() {
            ApiHelper.apiPost(this, null, 'meetings/pending').then(function(response){
              this.pending_meetings = response.body.data.pendingMeetings;
              console.log(response.body.data.pendingMeetings);
            });

            ApiHelper.apiPost(this, null, 'meetings/accepted').then(function(response){
              this.accepted_meetings = response.body.data.acceptedMeetings;
              console.log(response.body.data.acceptedMeetings);
            });
        },
        acceptMeeting:function(meeting_id) {
            console.log(meeting_id);

            let data = {
                meeting_id: meeting_id
            };

            ApiHelper.apiPost(this, data, 'meetings/accept').then(function(response){
              console.log(response.body.data);
            });

            location.reload();
        },
        declineMeeting:function(meeting_id) {
            console.log(meeting_id);

            let data = {
                meeting_id: meeting_id
            };

            ApiHelper.apiPost(this, data, 'meetings/decline').then(function(response){
              console.log(response.body.data);
            });

            location.reload();
        }
      }
    }
</script>

<style>
    .profile-picture{
        width: 100px;
        height: 100px;
    }
    .meeting-request {
        border: gray 2px solid;
        background: darkgray;
        font-size: 18px;
        color: white;
        border-radius: 10px;
    }

    .row {
        margin-right: 0;
    }

</style>
