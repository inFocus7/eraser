"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6013],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>d});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},m=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,g=u["".concat(i,".").concat(d)]||u[d]||p[d]||l;return r?t.createElement(g,o(o({ref:n},m),{},{components:r})):t.createElement(g,o({ref:n},m))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9418:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=r(7462),a=(r(7294),r(3905));const l={title:"Manual Removal"},o=void 0,s={unversionedId:"manual-removal",id:"version-v1.1.x/manual-removal",title:"Manual Removal",description:"Create an ImageList and specify the images you would like to remove. In this case, the image docker.io/library/alpine:3.7.3 will be removed.",source:"@site/versioned_docs/version-v1.1.x/manual-removal.md",sourceDirName:".",slug:"/manual-removal",permalink:"/eraser/docs/manual-removal",draft:!1,tags:[],version:"v1.1.x",frontMatter:{title:"Manual Removal"},sidebar:"sidebar",previous:{title:"Architecture",permalink:"/eraser/docs/architecture"},next:{title:"Exclusion",permalink:"/eraser/docs/exclusion"}},i={},c=[],m={toc:c};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create an ",(0,a.kt)("inlineCode",{parentName:"p"},"ImageList")," and specify the images you would like to remove. In this case, the image ",(0,a.kt)("inlineCode",{parentName:"p"},"docker.io/library/alpine:3.7.3")," will be removed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'cat <<EOF | kubectl apply -f -\napiVersion: eraser.sh/v1alpha1\nkind: ImageList\nmetadata:\n  name: imagelist\nspec:\n  images:\n    - docker.io/library/alpine:3.7.3   # use "*" for all non-running images\nEOF\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"ImageList")," is a cluster-scoped resource and must be called imagelist. ",(0,a.kt)("inlineCode",{parentName:"p"},'"*"')," can be specified to remove all non-running images instead of individual images.")),(0,a.kt)("p",null,"Creating an ",(0,a.kt)("inlineCode",{parentName:"p"},"ImageList")," should trigger an ",(0,a.kt)("inlineCode",{parentName:"p"},"ImageJob")," that will deploy Eraser pods on every node to perform the removal given the list of images."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pods -n eraser-system\neraser-system        eraser-controller-manager-55d54c4fb6-dcglq   1/1     Running   0          9m8s\neraser-system        eraser-kind-control-plane                    1/1     Running   0          11s\neraser-system        eraser-kind-worker                           1/1     Running   0          11s\neraser-system        eraser-kind-worker2                          1/1     Running   0          11s\n")),(0,a.kt)("p",null,"Pods will run to completion and the images will be removed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pods -n eraser-system\neraser-system        eraser-controller-manager-6d6d5594d4-phl2q   1/1     Running     0          4m16s\neraser-system        eraser-kind-control-plane                    0/1     Completed   0          22s\neraser-system        eraser-kind-worker                           0/1     Completed   0          22s\neraser-system        eraser-kind-worker2                          0/1     Completed   0          22s\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ImageList")," custom resource status field will contain the status of the last job. The success and failure counts indicate the number of nodes the Eraser agent was run on."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl describe ImageList imagelist\n...\nStatus:\n  Failed:     0\n  Success:    3\n  Timestamp:  2022-02-25T23:41:55Z\n...\n")),(0,a.kt)("p",null,"Verify the unused images are removed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker exec kind-worker ctr -n k8s.io images list | grep alpine\n")),(0,a.kt)("p",null,"If the image has been successfully removed, there will be no output."))}p.isMDXComponent=!0}}]);