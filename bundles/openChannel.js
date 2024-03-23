import{_ as n,d as e,e as t,I as r,b as a,a as i,i as s,A as o,aP as u,aQ as c,h as l,k as h,a8 as d,U as p,W as f,aa as v,ab as C,p as _,t as y,ag as m,w as g,F as U,ah as E,u as w,S as T,ao as N,V as H,j as O,a9 as I,g as M,X as b,n as x,B as D,aO as P}from"./__bundle-a953c60c.js";import{U as A,e as L,F as R,h as k,g as F,f as S,i as q,j as Q,k as z,C as K,l as W,T as j,m as B,D as G,n as X,o as V,p as Z,q as Y,A as $,a as J}from"./__bundle-459ad47d.js";import{B as nn}from"./__bundle-6cc2e604.js";var en=function(r){function a(){var n=null!==r&&r.apply(this,arguments)||this;return n._channels=new Map,n._enteredChannelUrls=[],n}return n(a,r),Object.defineProperty(a.prototype,"enteredChannels",{get:function(){var n=this;return this._enteredChannelUrls.map((function(e){return n._channels.get(e)})).filter((function(n){return null!==n}))},enumerable:!1,configurable:!0}),a.prototype.isEnteredChannel=function(n){return this._enteredChannelUrls.includes(n)},a.prototype.enter=function(n){this._enteredChannelUrls.indexOf(n)<0&&this._enteredChannelUrls.push(n)},a.prototype.exit=function(n){var e=this._enteredChannelUrls.indexOf(n);e>=0&&this._enteredChannelUrls.splice(e,1)},a.prototype.exitAll=function(){this._enteredChannelUrls=[]},a.prototype.get=function(n){var r;return e(this,void 0,void 0,(function(){return t(this,(function(e){return[2,null!==(r=this._channels.get(n))&&void 0!==r?r:null]}))}))},a.prototype.upsert=function(n){return e(this,void 0,void 0,(function(){var e=this;return t(this,(function(t){return n.forEach((function(n){if(e._channels.has(n.url)){var t=e._channels.get(n.url);Object.assign(t,n)}else e._channels.set(n.url,n)})),[2]}))}))},a.prototype.remove=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){return this._channels.delete(n),this.exit(n),[2]}))}))},a.prototype.clear=function(){return e(this,void 0,void 0,(function(){return t(this,(function(n){return this._channels.clear(),this._enteredChannelUrls=[],[2]}))}))},a}(r),tn=function(){this.channelUrl=null,this.name=null,this.coverUrlOrImage=null,this.data=null,this.customType=null,this.operatorUserIds=null},rn=function(e){function t(n){var t=e.call(this)||this;if(n)for(var r in n)t.hasOwnProperty(r)&&(t[r]=n[r]);return t}return n(t,e),t.prototype.validate=function(){return a("string",this.operatorUserIds,!0)&&(i("string",this.coverUrlOrImage)||s(this.coverUrlOrImage)||null===this.coverUrlOrImage)&&i("string",this.name,!0)&&i("string",this.data,!0)&&i("string",this.customType,!0)&&(i("string",this.channelUrl)&&/^\w+$/.test(this.channelUrl)||null===this.channelUrl)},t}(tn),an=function(e){function t(n){var t=n.channelUrl,r=n.isInternalCall,a=e.call(this)||this;return a.method=o.GET,a.path="".concat(r?u:c,"/").concat(encodeURIComponent(t)),a}return n(t,e),t}(l),sn=function(e){function t(n,t){var r=e.call(this,n,t)||this;return r.channel=null,r.channel=new En(n,t),r}return n(t,e),t}(h),on=function(e){function t(n){var t=this,r=n.channelUrl,a=n.coverUrlOrImage,u=n.name,l=n.data,h=n.customType,d=n.operatorUserIds;return(t=e.call(this)||this).method=o.POST,t.path=c,t.params={channel_url:r,cover_url:i("string",a)?a:null,cover_file:s(a)?a:null,name:u,data:l,custom_type:h,operators:d},t}return n(t,e),t}(l);!function(e){function t(n,t){var r=e.call(this,n,t)||this;return r.channel=new En(n,t),r}n(t,e)}(h);var un=function(e){function t(n){var t=n.channelUrl;return e.call(this,{code:"ENTR",payload:{channel_url:t},ackRequired:!0})||this}return n(t,e),t}(d),cn=function(e){function t(n,t,r){var a,i,s=this;return s=e.call(this,n,"ENTR",r)||this,r.data&&(s.participantCount=null!==(a=r.data.participant_count)&&void 0!==a?a:0,s.user=new p(n,r.data),s.ts=null!==(i=r.data.edge_ts)&&void 0!==i?i:0),s}return n(t,e),t}(f),ln=function(e){function t(n){var t=n.channelUrl;return e.call(this,{code:"EXIT",payload:{channel_url:t},ackRequired:!0})||this}return n(t,e),t}(d),hn=function(e){function t(n,t,r){var a,i,s=this;return s=e.call(this,n,"EXIT",r)||this,r.data&&(s.participantCount=null!==(a=r.data.participant_count)&&void 0!==a?a:0,s.user=new p(n,r.data),s.ts=null!==(i=r.data.edge_ts)&&void 0!==i?i:0),s}return n(t,e),t}(f),dn={},pn=function(){function n(n,e){var t=e.sdkState,r=e.dispatcher,a=e.requestQueue,i=this;this._sdkState=t,this._requestQueue=a,this._dispatcher=r,this._openChannelCache=new en(n),this._openChannelHandlers=new Map,this._dispatcher.on((function(n){var e,t;if(n instanceof f)i._handleEvent(n);else if(n instanceof v&&n.stateType===C.CONNECTED){var r=i._openChannelCache.enteredChannels;try{for(var a=_(r),s=a.next();!s.done;s=a.next()){s.value.enter()}}catch(n){e={error:n}}finally{try{s&&!s.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}}})),dn[n]=this}return n.of=function(n){return dn[n]},n.prototype.buildOpenChannelFromSerializedData=function(n){var e=y(n);return new En(e._iid,En.payloadify(e))},n.prototype.getChannelFromCache=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,this._openChannelCache.get(n)];case 1:return[2,e.sent()]}}))}))},n.prototype.upsertChannelsToCache=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,this._openChannelCache.upsert(n)];case 1:return e.sent(),[2]}}))}))},n.prototype.removeChannelsFromCache=function(n){return e(this,void 0,void 0,(function(){var e,r,a,i,s,o;return t(this,(function(t){switch(t.label){case 0:t.trys.push([0,5,6,7]),e=_(n),r=e.next(),t.label=1;case 1:return r.done?[3,4]:(a=r.value,[4,this._openChannelCache.remove(a)]);case 2:t.sent(),t.label=3;case 3:return r=e.next(),[3,1];case 4:return[3,7];case 5:return i=t.sent(),s={error:i},[3,7];case 6:try{r&&!r.done&&(o=e.return)&&o.call(e)}finally{if(s)throw s.error}return[7];case 7:return[2]}}))}))},n.prototype.setEnteredToCache=function(n){this._openChannelCache.enter(n.url)},n.prototype.setExitedToCache=function(n){this._openChannelCache.exit(n.url)},n.prototype._handleEvent=function(n){return e(this,void 0,void 0,(function(){var r,a,i,s,o,u,c,l,h,d,p,f,v,C,y,w,T,N,H,O,I,M,b,x,D,P,J,nn,en,tn,rn,an,sn,on,un,ln,dn,pn,fn,vn,Cn,_n,yn,mn,gn,Un,En,wn,Tn,Nn,Hn,On,In,Mn,bn,xn,Dn,Pn,An,Ln=this;return t(this,(function(Rn){switch(Rn.label){case 0:switch(Rn.trys.push([0,51,,52]),n.code){case"MESG":case"FILE":case"ADMM":case"BRDM":return[3,1];case"MEDI":case"FEDI":case"AEDI":return[3,4];case"DELM":return[3,7];case"MRCT":return[3,10];case"MTHD":return[3,13];case"MCNT":return[3,16];case"SYEV":return[3,27]}return[3,50];case 1:return s=null,"MESG"===n.code?s=n.as(Y):"FILE"===n.code?s=n.as(E):"ADMM"!==n.code&&"BRDM"!=n.code||(s=n.as($)),s?(r=s.message,a=s.isMentioned,r.channelType!==U.OPEN?[3,3]:[4,this.getChannel(r.channelUrl,!0)]):[3,3];case 2:i=Rn.sent(),g((function(){return e(Ln,void 0,void 0,(function(){var n,e,s,o,u;return t(this,(function(t){try{for(n=_(this._openChannelHandlers.values()),e=n.next();!e.done;e=n.next())s=e.value,this._openChannelCache.isEnteredChannel(i.url)&&s.onMessageReceived(i,r),a&&s.onMentionReceived(i,r)}catch(n){o={error:n}}finally{try{e&&!e.done&&(u=n.return)&&u.call(n)}finally{if(o)throw o.error}}return[2]}))}))})),Rn.label=3;case 3:return[3,50];case 4:return s=null,"MEDI"===n.code?s=n.as(X):"FEDI"===n.code?s=n.as(V):"AEDI"===n.code&&(s=n.as(Z)),s?(o=s.message).channelType!==U.OPEN?[3,6]:[4,this.getChannel(o.channelUrl,!0)]:[3,6];case 5:u=Rn.sent(),g((function(){return e(Ln,void 0,void 0,(function(){var n,e,r,a,i;return t(this,(function(t){try{for(n=_(this._openChannelHandlers.values()),e=n.next();!e.done;e=n.next())r=e.value,this._openChannelCache.isEnteredChannel(u.url)&&r.onMessageUpdated(u,o)}catch(n){a={error:n}}finally{try{e&&!e.done&&(i=n.return)&&i.call(n)}finally{if(a)throw a.error}}return[2]}))}))})),Rn.label=6;case 6:return[3,50];case 7:return c=n.as(G),I=c.channelUrl,p=c.channelType,l=c.messageId,p!==U.OPEN?[3,9]:[4,this.getChannel(I,!0)];case 8:h=Rn.sent(),g((function(){return e(Ln,void 0,void 0,(function(){var n,e,r,a,i;return t(this,(function(t){try{for(n=_(this._openChannelHandlers.values()),e=n.next();!e.done;e=n.next())r=e.value,this._openChannelCache.isEnteredChannel(h.url)&&r.onMessageDeleted(h,l)}catch(n){a={error:n}}finally{try{e&&!e.done&&(i=n.return)&&i.call(n)}finally{if(a)throw a.error}}return[2]}))}))})),Rn.label=9;case 9:return[3,50];case 10:return d=n.as(B),I=d.channelUrl,p=d.channelType,f=d.event,p!==U.OPEN?[3,12]:[4,this.getChannel(I,!0)];case 11:v=Rn.sent(),g((function(){return e(Ln,void 0,void 0,(function(){var n,e,r,a;return t(this,(function(t){try{for(n=_(this._openChannelHandlers.values()),e=n.next();!e.done;e=n.next())e.value.onReactionUpdated(v,f)}catch(n){r={error:n}}finally{try{e&&!e.done&&(a=n.return)&&a.call(n)}finally{if(r)throw r.error}}return[2]}))}))})),Rn.label=12;case 12:return[3,50];case 13:return(C=n.as(j).event).channelType!==U.OPEN?[3,15]:[4,this.getChannel(C.channelUrl,!0)];case 14:y=Rn.sent(),g((function(){return e(Ln,void 0,void 0,(function(){var n,e,r,a;return t(this,(function(t){try{for(n=_(this._openChannelHandlers.values()),e=n.next();!e.done;e=n.next())e.value.onThreadInfoUpdated(y,C)}catch(n){r={error:n}}finally{try{e&&!e.done&&(a=n.return)&&a.call(n)}finally{if(r)throw r.error}}return[2]}))}))})),Rn.label=15;case 15:return[3,50];case 16:w=n.as(W).openChannelMemberCounts,T=[],Rn.label=17;case 17:Rn.trys.push([17,22,23,24]),N=_(w),H=N.next(),Rn.label=18;case 18:return H.done?[3,21]:(O=H.value,I=O.channelUrl,an=O.participantCount,M=O.updatedAt,[4,this.getChannelFromCache(I)]);case 19:(b=Rn.sent())&&b._updateParticipantCount(an,M)&&T.push(b),Rn.label=20;case 20:return H=N.next(),[3,18];case 21:return[3,24];case 22:return x=Rn.sent(),Pn={error:x},[3,24];case 23:try{H&&!H.done&&(An=N.return)&&An.call(N)}finally{if(Pn)throw Pn.error}return[7];case 24:return T.length>0?[4,this.upsertChannelsToCache(T)]:[3,26];case 25:Rn.sent(),g((function(){return e(Ln,void 0,void 0,(function(){var n,e,r,a;return t(this,(function(t){try{for(n=_(this._openChannelHandlers.values()),e=n.next();!e.done;e=n.next())e.value.onChannelMemberCountChanged(T)}catch(n){r={error:n}}finally{try{e&&!e.done&&(a=n.return)&&a.call(n)}finally{if(r)throw r.error}}return[2]}))}))})),Rn.label=26;case 26:return[3,50];case 27:if(!(D=n.as(K).event).isOpenChannelEvent)return[3,49];switch(D.category){case k.CHANNEL_ENTER:return[3,28];case k.CHANNEL_EXIT:return[3,30];case k.CHANNEL_OPERATOR_UPDATE:return[3,32];case k.USER_CHANNEL_MUTE:case k.USER_CHANNEL_UNMUTE:return[3,34];case k.USER_CHANNEL_BAN:case k.USER_CHANNEL_UNBAN:return[3,36];case k.CHANNEL_FREEZE:case k.CHANNEL_UNFREEZE:return[3,38];case k.CHANNEL_DELETED:return[3,40];case k.CHANNEL_PROP_CHANGED:return[3,43];case k.CHANNEL_META_DATA_CHANGED:return[3,45];case k.CHANNEL_META_COUNTERS_CHANGED:return[3,47]}return[3,49];case 28:return[4,this.getChannel(D.channelUrl,!0)];case 29:return P=Rn.sent(),J=n.as(cn),an=J.participantCount,nn=J.user,en=P._updateParticipantCount(an,D.ts),g((function(){return e(Ln,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){n.onUserEntered(P,nn),en&&n.onChannelParticipantCountChanged(P)})),[2]}))}))})),[3,49];case 30:return[4,this.getChannel(D.channelUrl,!0)];case 31:return tn=Rn.sent(),rn=n.as(hn),an=rn.participantCount,sn=rn.user,on=tn._updateParticipantCount(an,D.ts),g((function(){return e(Ln,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){n.onUserExited(tn,sn),on&&n.onChannelParticipantCountChanged(tn)})),[2]}))}))})),[3,49];case 32:return[4,this.getChannel(D.channelUrl,!0)];case 33:return un=Rn.sent(),ln=n.as(z).operators,un.operators=ln,this.upsertChannelsToCache([un]),g((function(){return e(Ln,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){n.onOperatorUpdated(un,ln)})),[2]}))}))})),[3,49];case 34:return[4,this.getChannel(D.channelUrl,!0)];case 35:return dn=Rn.sent(),pn=D.category===k.USER_CHANNEL_MUTE,fn=n.as(pn?q:Q).user,g((function(){return e(Ln,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){pn?n.onUserMuted(dn,fn):n.onUserUnmuted(dn,fn)})),[2]}))}))})),[3,49];case 36:return[4,this.getChannel(D.channelUrl,!0)];case 37:return vn=Rn.sent(),Cn=D.category===k.USER_CHANNEL_BAN,_n=n.as(Cn?F:S).user,g((function(){return e(Ln,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){Cn?n.onUserBanned(vn,_n):n.onUserUnbanned(vn,_n)})),[2]}))}))})),[3,49];case 38:return[4,this.getChannel(D.channelUrl,!0)];case 39:return yn=Rn.sent(),mn=n.as(R).freeze,yn.isFrozen=mn,this.upsertChannelsToCache([yn]),g((function(){return e(Ln,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){mn?n.onChannelFrozen(yn):n.onChannelUnfrozen(yn)})),[2]}))}))})),[3,49];case 40:return[4,this.getChannel(D.channelUrl,!0)];case 41:return gn=Rn.sent(),[4,this.removeChannelsFromCache([gn.url])];case 42:return Rn.sent(),g((function(){return e(Ln,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){n.onChannelDeleted(gn.url,gn.channelType)})),[2]}))}))})),[3,49];case 43:return[4,this.getChannelWithoutCache(D.channelUrl,!0)];case 44:return Un=Rn.sent(),g((function(){return e(Ln,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){n.onChannelChanged(Un)})),[2]}))}))})),[3,49];case 45:return[4,this.getChannel(D.channelUrl,!0)];case 46:return En=Rn.sent(),wn=n.as(L),Tn=wn.created,Nn=wn.updated,Hn=wn.deleted,Tn&&En._upsertCachedMetaData(Tn,D.ts),Nn&&En._upsertCachedMetaData(Nn,D.ts),Hn&&En._removeFromCachedMetaData(Hn,D.ts),g((function(){return e(Ln,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){Tn&&n.onMetaDataCreated(En,Tn),Nn&&n.onMetaDataUpdated(En,Nn),Hn&&n.onMetaDataDeleted(En,Hn)})),[2]}))}))})),[3,49];case 47:return[4,this.getChannel(D.channelUrl,!0)];case 48:return On=Rn.sent(),In=n.as(A),Mn=In.created,bn=In.updated,xn=In.deleted,g((function(){return e(Ln,void 0,void 0,(function(){return t(this,(function(n){return this._openChannelHandlers.forEach((function(n){Mn&&n.onMetaCounterCreated(On,Mn),bn&&n.onMetaCounterUpdated(On,bn),xn&&n.onMetaCounterDeleted(On,xn)})),[2]}))}))})),[3,49];case 49:return[3,50];case 50:return[3,52];case 51:if(Dn=Rn.sent(),m(Dn))throw Dn;return[3,52];case 52:return[2]}}))}))},n.prototype.addHandler=function(n,e){this._openChannelHandlers.set(n,e)},n.prototype.removeHandler=function(n){this._openChannelHandlers.delete(n)},n.prototype.clearHandler=function(){this._openChannelHandlers.clear()},n.prototype.getChannel=function(n,r){return e(this,void 0,void 0,(function(){var e;return t(this,(function(t){switch(t.label){case 0:w(i("string",n)).throw(T.invalidParameters),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.getChannelFromCache(n)];case 2:return(e=t.sent())?[2,e]:[3,4];case 3:return t.sent(),[3,4];case 4:return[4,this.getChannelWithoutCache(n)];case 5:return[2,t.sent()]}}))}))},n.prototype.getChannelWithoutCache=function(n,r){return void 0===r&&(r=!1),e(this,void 0,void 0,(function(){var e,a,s;return t(this,(function(t){switch(t.label){case 0:return w(i("string",n)).throw(T.invalidParameters),e=new an({channelUrl:n,isInternalCall:r}),[4,this._requestQueue.send(e)];case 1:return a=t.sent(),s=a.as(sn).channel,[4,this.upsertChannelsToCache([s])];case 2:return t.sent(),[2,s]}}))}))},n.prototype.createChannel=function(n){return e(this,void 0,void 0,(function(){var e,r,a;return t(this,(function(t){switch(t.label){case 0:return w(n instanceof rn&&n.validate()).throw(T.invalidParameters),e=new on(n),[4,this._requestQueue.send(e)];case 1:return r=t.sent(),a=r.as(sn).channel,this.upsertChannelsToCache([a]),[2,a]}}))}))},n}(),fn=function(){this.name=null,this.coverUrlOrImage=null,this.data=null,this.customType=null,this.operatorUserIds=null},vn=function(e){function t(n){var t=e.call(this)||this;if(n)for(var r in n)t.hasOwnProperty(r)&&(t[r]=n[r]);return t}return n(t,e),t.prototype.validate=function(){return a("string",this.operatorUserIds,!0)&&(i("string",this.coverUrlOrImage)||s(this.coverUrlOrImage)||null===this.coverUrlOrImage)&&i("string",this.name,!0)&&i("string",this.data,!0)&&i("string",this.customType,!0)},t}(fn),Cn=function(e){function t(n){var t=this,r=n.channelUrl,a=n.token,i=n.limit;return(t=e.call(this)||this).method=o.GET,t.path="".concat(c,"/").concat(encodeURIComponent(r),"/participants"),t.params={token:a,limit:i},t}return n(t,e),t}(l),_n=function(e){function t(n,t){var r=e.call(this,n,t)||this;r.token=null,r.participants=[];var a=t.next,i=t.participants;return r.token=a,r.participants=i.map((function(e){return new p(n,e)})),r}return n(t,e),t}(h),yn=function(r){function a(n,e,t){return r.call(this,n,e,U.OPEN,t)||this}return n(a,r),a.prototype._validate=function(){return r.prototype._validate.call(this)},a.prototype.next=function(){return e(this,void 0,void 0,(function(){var n,e,r,a,i,s;return t(this,(function(t){switch(t.label){case 0:return this._validate()?this._isLoading?[3,3]:this._hasNext?(this._isLoading=!0,n=H.of(this._iid).requestQueue,e=new Cn(O(O({},this),{token:this._token})),[4,n.send(e)]):[3,2]:[3,5];case 1:return r=t.sent(),a=r.as(_n),i=a.participants,s=a.token,this._token=s,this._hasNext=!!s,this._isLoading=!1,[2,i];case 2:return[2,[]];case 3:throw T.queryInProgress;case 4:return[3,6];case 5:throw T.invalidParameters;case 6:return[2]}}))}))},a}(N),mn=function(e){function t(n){var t=this,r=n.channelUrl,a=n.coverUrlOrImage,u=n.name,l=n.data,h=n.customType,d=n.operatorUserIds;return(t=e.call(this)||this).method=o.PUT,t.path="".concat(c,"/").concat(encodeURIComponent(r)),t.params={cover_url:i("string",a)?a:null,cover_file:s(a)?a:null,name:u,data:l,custom_type:h,operators:d},t}return n(t,e),t}(l),gn=function(e){function t(n,t){var r=e.call(this,n,t)||this;return r.channel=new En(n,t),r}return n(t,e),t}(h),Un=function(e){function t(n){var t=this,r=n.channelUrl;return(t=e.call(this)||this).method=o.DELETE,t.path="".concat(c,"/").concat(encodeURIComponent(r)),t}return n(t,e),t}(l);!function(e){function t(n,t){return e.call(this,n,t)||this}n(t,e)}(h);var En=function(r){function a(n,e){var t,a=this;return(a=r.call(this,n,e)||this)._lastParticipantCountUpdated=0,a.participantCount=0,a.operators=[],a.channelType=U.OPEN,a.participantCount=null!==(t=e.participant_count)&&void 0!==t?t:0,a.operators=Array.isArray(e.operators)?e.operators.map((function(e){return new p(n,e)})):[],a}return n(a,r),a.payloadify=function(n){return n?M(O(O({},J.payloadify(n)),{participant_count:n.participantCount,operators:n.operators.map((function(n){return p.payloadify(n)}))})):null},a.prototype.serialize=function(){return I(this)},a.prototype.isOperator=function(n){return n instanceof p?this.isOperator(n.userId):this.operators.some((function(e){return e.userId===n}))},a.prototype._updateParticipantCount=function(n,e){return e>this._lastParticipantCountUpdated&&(this.participantCount=n,this._lastParticipantCountUpdated=e,!0)},a.prototype.createParticipantListQuery=function(n){return new yn(this._iid,this.url,n)},a.prototype.refresh=function(){return e(this,void 0,void 0,(function(){return t(this,(function(n){switch(n.label){case 0:return[4,pn.of(this._iid).getChannelWithoutCache(this.url)];case 1:return[2,n.sent()]}}))}))},a.prototype.enter=function(){return e(this,void 0,void 0,(function(){var n,e,r,a,i,s;return t(this,(function(t){switch(t.label){case 0:return n=H.of(this._iid).requestQueue,e=new un({channelUrl:this.url}),[4,n.send(e)];case 1:return r=t.sent(),a=r.as(cn),i=a.participantCount,s=a.ts,this._updateParticipantCount(i,s),pn.of(this._iid).setEnteredToCache(this),[2]}}))}))},a.prototype.exit=function(){return e(this,void 0,void 0,(function(){var n,e,r,a,i,s;return t(this,(function(t){switch(t.label){case 0:return n=H.of(this._iid).requestQueue,e=new ln({channelUrl:this.url}),[4,n.send(e)];case 1:return r=t.sent(),a=r.as(hn),i=a.participantCount,s=a.ts,this._updateParticipantCount(i,s),pn.of(this._iid).setExitedToCache(this),b.of(this._iid).fileMessageQueue.cancel(this),[2]}}))}))},a.prototype.updateChannel=function(n){return e(this,void 0,void 0,(function(){var e,r,a,i;return t(this,(function(t){switch(t.label){case 0:return w(n instanceof vn&&n.validate()).throw(T.invalidParameters),e=H.of(this._iid).requestQueue,r=new mn(O({channelUrl:this.url},n)),[4,e.send(r)];case 1:return a=t.sent(),i=a.as(gn).channel,[4,pn.of(this._iid).upsertChannelsToCache([i])];case 2:return t.sent(),[2,i]}}))}))},a.prototype.updateChannelWithOperatorUserIds=function(n,r,a,i,s){return e(this,void 0,void 0,(function(){var e;return t(this,(function(t){return(e=new vn).name=n,e.coverUrlOrImage=r,e.data=a,e.operatorUserIds=i,e.customType=s,[2,this.updateChannel(e)]}))}))},a.prototype.delete=function(){return e(this,void 0,void 0,(function(){var n,e;return t(this,(function(t){switch(t.label){case 0:return n=H.of(this._iid).requestQueue,e=new Un({channelUrl:this.url}),[4,n.send(e)];case 1:return t.sent(),[4,pn.of(this._iid).removeChannelsFromCache([this.url])];case 2:return t.sent(),[2]}}))}))},a}(J),wn=function(e){function t(n){void 0===n&&(n={});var t=e.call(this)||this;return Object.keys(n).forEach((function(e){t.hasOwnProperty(e)&&(t[e]=n[e])})),t}return n(t,e),t}(function(e){function t(){var n=null!==e&&e.apply(this,arguments)||this;return n.onUserEntered=x,n.onUserExited=x,n.onChannelParticipantCountChanged=x,n}return n(t,e),t}(nn)),Tn=function(e){function t(n){var t=this,r=n.token,a=n.limit,i=n.nameKeyword,s=n.urlKeyword,u=n.customTypes,l=n.includeFrozen,h=n.includeMetaData;return(t=e.call(this)||this).method=o.GET,t.path=c,t.params=M({token:r,limit:a,name_contains:i,url_contains:s,custom_types:u,show_frozen:l,show_metadata:h}),t}return n(t,e),t}(l),Nn=function(e){function t(n,t){var r=e.call(this,n,t)||this;r.token=null,r.channels=[],r.ts=null;var a=t.next,i=t.channels,s=t.ts;return r.token=a,i&&i.length>0&&(r.channels=i.map((function(e){return new En(n,e)}))),r.ts="number"==typeof s?s:null,r}return n(t,e),t}(h),Hn=function(r){function s(n,e){var t,a,i,s,o,u=this;return(u=r.call(this,n,e)||this).includeFrozen=!0,u.includeMetaData=!0,u.nameKeyword=null,u.urlKeyword=null,u.customTypes=null,u.includeFrozen=null===(t=e.includeFrozen)||void 0===t||t,u.includeMetaData=null===(a=e.includeMetaData)||void 0===a||a,u.nameKeyword=null!==(i=e.nameKeyword)&&void 0!==i?i:null,u.urlKeyword=null!==(s=e.urlKeyword)&&void 0!==s?s:null,u.customTypes=null!==(o=e.customTypes)&&void 0!==o?o:null,u}return n(s,r),s.prototype._validate=function(){return r.prototype._validate.call(this)&&i("boolean",this.includeFrozen)&&i("boolean",this.includeMetaData)&&i("string",this.nameKeyword,!0)&&i("string",this.urlKeyword,!0)&&a("string",this.customTypes,!0)},s.prototype.next=function(){return e(this,void 0,void 0,(function(){var n,e,r,a,i,s;return t(this,(function(t){switch(t.label){case 0:return this._validate()?this._isLoading?[3,4]:this._hasNext?(this._isLoading=!0,n=H.of(this._iid).requestQueue,e=new Tn(O(O({},this),{token:this._token})),[4,n.send(e)]):[3,3]:[3,6];case 1:return r=t.sent(),a=r.as(Nn),i=a.channels,s=a.token,this._token=s,this._hasNext=!!s,[4,pn.of(this._iid).upsertChannelsToCache(i)];case 2:return t.sent(),this._isLoading=!1,[2,i];case 3:return[2,[]];case 4:throw T.queryInProgress;case 5:return[3,7];case 6:throw T.invalidParameters;case 7:return[2]}}))}))},s}(D),On=function(r){function a(){var n=null!==r&&r.apply(this,arguments)||this;return n.name="openChannel",n}return n(a,r),a.prototype.init=function(n,e){var t=e.sdkState,a=e.dispatcher,i=e.sessionManager,s=e.requestQueue,o=e.logger,u=e.cacheContext;r.prototype.init.call(this,n,{sdkState:t,dispatcher:a,sessionManager:i,requestQueue:s,logger:o,cacheContext:u}),this._manager=new pn(n,{sdkState:t,dispatcher:a,requestQueue:s})},a.prototype.createOpenChannelListQuery=function(n){return void 0===n&&(n={}),new Hn(this._iid,n)},a.prototype.addOpenChannelHandler=function(n,e){this._manager.addHandler(n,e)},a.prototype.removeOpenChannelHandler=function(n){this._manager.removeHandler(n)},a.prototype.removeAllOpenChannelHandlers=function(){this._manager.clearHandler()},a.prototype.buildOpenChannelFromSerializedData=function(n){return this._manager.buildOpenChannelFromSerializedData(n)},a.prototype.getChannel=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){return[2,this._manager.getChannel(n)]}))}))},a.prototype.getChannelWithoutCache=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){return[2,this._manager.getChannelWithoutCache(n)]}))}))},a.prototype.createChannel=function(n){return e(this,void 0,void 0,(function(){return t(this,(function(e){return[2,this._manager.createChannel(n)]}))}))},a.prototype.createChannelWithOperatorUserIds=function(n,r,a,i,s){return e(this,void 0,void 0,(function(){var e;return t(this,(function(t){return(e=new rn).name=n,e.coverUrlOrImage=r,e.data=a,e.operatorUserIds=i,e.customType=s,[2,this._manager.createChannel(e)]}))}))},a}(P);export{En as OpenChannel,rn as OpenChannelCreateParams,tn as OpenChannelCreateParamsProperties,wn as OpenChannelHandler,Hn as OpenChannelListQuery,On as OpenChannelModule,vn as OpenChannelUpdateParams,fn as OpenChannelUpdateParamsProperties,yn as ParticipantListQuery};