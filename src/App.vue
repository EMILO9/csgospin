<template>
  <div id="app">
    <div class="Header">
      <span class="Logo"><i class="fas fa-gem"></i> CSGOSPIN</span>
      <div class="Menu">
        <div class="avatarWrapper">
          <div class="menuAvatar"></div>
        </div>
        <div class="menuName">{{User.Name}}</div>
        <div class="menuBalance"><i class="fas fa-coins"></i> {{User.Balance}}</div>
        <button class="menuBTN"><i class="fas fa-plus-circle"></i></button>
        <button class="menuBTN"><i class="fas fa-minus-circle"></i></button>
        <button class="menuBTN"><i class="fas fa-headset"></i></button>
        <button class="menuBTN"><i class="fas fa-sign-out-alt"></i></button>
      </div>
    </div>
    <div class="gameModes">
      <div class="gameMode" :class="{gameModeActive: $route.path === n.URL}" v-for="(n, index) in Gamemodes" :key="n+index" @click="changePage(n.URL)"><i class="fas fa-dice"></i> {{n.Name}}</div>
    </div>
    <div class="Content">
      <div class="sidebarLeft">
        <div class="Chat">
          <div class="innerChat">
            <div class="chatMessage" v-for="(m, index) in messages" :key="m+index">
              <div class="User">
                <div class="chatUserWrapper">
                  <div class="chatAvatar"></div>
                  {{m.User}}
                  </div> 
              <span class="postedTime"><i class="far fa-clock"></i> {{m.Posted}}</span>
              </div>
              <div class="Message">{{m.Msg}}</div>
            </div>
          </div>
        </div>
        <div class="chatSend">
          <input v-on:keyup.enter="sendMessage" v-model="text" type="text" class="chatInp" placeholder="Say something..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
          <button class="chatBtn" @click="sendMessage"><i class="fas fa-reply"></i></button>
        </div>
      </div>
      <div class="Display">
        <transition name="fade">
        <router-view/>
        </transition>
      </div>
    </div>
    <div class="Footer">
      Copyright © 2020 by CSGOSpin
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      messages: [
        {User: 'Admin', Msg: 'This is a test message.', Posted: new Date().toLocaleTimeString()}
      ],
      text: '',
      Gamemodes: [
        {Name: 'Roulette', URL: '/'},
        {Name: 'Coinflip', URL: '/Coinflip'},
        {Name: 'Crash', URL: '/Crash'},
        {Name: 'Unboxing', URL: '/Unboxing'}
      ],
      User: {
        Name: 'EMILO',
        Balance: Math.floor(Math.random() * 1000) + 1 .toFixed(2),
        Avatar: ''
      }
    }
  },
  methods: {
    sendMessage () {
      if (this.text.length >= 1) {
        this.messages.push({User: this.User.Name, Msg: this.text, Posted: new Date().toLocaleTimeString()})
        this.text = ''
      }
    },
    changePage (page) {
      this.$router.push(page)
    }
  }
}
</script>
