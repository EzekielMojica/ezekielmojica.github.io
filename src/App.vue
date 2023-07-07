<template>
  <header>
    <div class="px-3 h-14 bg-white w-full fixed flex items-center">
      <img src="./assets/logo.svg" width="36" alt="logo" />
    </div>
  </header>
  <main class="container mx-auto px-4 mb-20 md:mb-0">
    <div class="min-h-screen flex items-center" id="intro">
      <div class="mx-auto px-4">
        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-semibold !leading-tight"
        >
          Hello! My name is
        </h2>
        <h1
          class="text-6xl md:text-7xl lg:text-8xl font-semibold !leading-tight"
        >
          Ezekiel Mojica.
        </h1>
        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-semibold !leading-tight"
        >
          I'm a full stack developer.
        </h2>
      </div>
    </div>
    <div class="mb-14" id="about">
      <CHeader>About Me</CHeader>
      <div class="flex flex-wrap lg:flex-nowrap justify-center gap-8 mb-8">
        <img
          class="mx-auto h-64 w-64 xl:h-64 xl:w-64 border-4 border-black rounded-3xl"
          src="./assets/wanted.jpg"
          alt="Ezekiel Mojica"
        />
        <div class="shrink">
          <p class="text-justify text-lg">
            <span>Hi<span class="wave">👋</span>!</span> {{ aboutMe }}
          </p>
        </div>
      </div>

      <h4
        class="text-xl md:text-2xl lg:text-3xl mb-6 font-semibold !leading-tight text-center"
      >
        Skills
      </h4>
      <div class="flex gap-4 flex-wrap justify-between">
        <SkillBox title="Back End" :items="backEndSkills"></SkillBox>
        <SkillBox title="Front End" :items="frontEndSkills"></SkillBox>
        <SkillBox title="Languages" :items="languageSkills"></SkillBox>
        <SkillBox title="Testing" :items="testingSkills"></SkillBox>
      </div>
    </div>
    <!-- <div class="mb-14" id="experience">
      <CHeader>Experience</CHeader>
      <div>
        <h5 class="font-black !leading-tight">
          House Research and Development Singapore Ltd. Pte.
        </h5>
        <h5 class="italic font-semibold !leading-tight">
          Full Stack Developer
        </h5>
        <h6 class="!leading-tight">July 6, 2022 - Present</h6>
      </div>
    </div> -->
    <div class="mb-14" id="projects">
      <CHeader>Projects</CHeader>
      <ProjectBox v-bind="googleSheetCreator">
        <template #actions>
          <div
            class="flex border border-gray-600 p-2 text-gray-600 items-center rounded-lg gap-2"
          >
            <CIcon icon="mdi-information-outline"></CIcon>
            <span> Private project, Demo and Github link not available </span>
          </div>
        </template>
      </ProjectBox>
      <ProjectBox v-bind="kisoAnswersheet">
        <template #actions>
          <div
            class="flex border border-gray-600 p-2 text-gray-600 items-center rounded-lg gap-2"
          >
            <CIcon icon="mdi-information-outline"></CIcon>
            <span> Private project, Demo and Github link not available </span>
          </div>
        </template>
      </ProjectBox>
    </div>
    <div class="mb-14" id="projects">
      <CHeader>Resume</CHeader>
      <div class="flex justify-center gap-6">
        <CButton class="w-52">
          <CIcon icon="mdi-text-box-search-outline"></CIcon>
          View Resume
        </CButton>
        <CButton class="w-52">
          <CIcon icon="mdi-download-outline"></CIcon>
          Download Resume
        </CButton>
      </div>
    </div>
    <div class="mb-14 lg:w-[768px] mx-auto" id="projects">
      <CHeader>Contact Me</CHeader>
      <div>
        <TextField v-model="editedContactMe.name" label="Name"></TextField>
        <TextField v-model="editedContactMe.email" label="Email"></TextField>
        <TextArea
          rows="4"
          v-model="editedContactMe.message"
          label="Message"
        ></TextArea>

        <CButton class="mx-auto">
          <CIcon icon="mdi-send-outline"></CIcon>
          Send
        </CButton>
      </div>
    </div>
  </main>

  <footer>
    <div
      class="bg-white border-t border-gray-200 fixed bottom-0 left-0 w-full flex gap-2 h-16 md:hidden"
    >
      <a
        href="#about"
        class="flex flex-col items-center flex-1 justify-center pb-4 pt-3 text-gray-600 hover:bg-slate-100"
      >
        <CIcon icon="mdi-information-outline" />
        <span class="text-xs font-semibold">About Me</span>
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

import CIcon from "./components/CIcon.vue";
import SkillBox from "./components/SkillBox.vue";
import CHeader from "./components/CHeader.vue";
import CButton from "./components/CButton.vue";
import TextField from "./components/TextField.vue";
import TextArea from "./components/TextArea.vue";
import ProjectBox from "./components/ProjectBox.vue";

import type { Project, Skill } from "./types";

interface ContactMe {
  name: string;
  email: string;
  message: string;
}

type PartialContactMe = Partial<ContactMe>;

const aboutMe =
  ref<string>(`I'm Ezekiel Mojica, a passionate full stack developer with a
            Bachelor of Science in Information Technology and 2 years of
            experience. With a deep passion for continuous learning and
            analytical thinking, I thoroughly enjoy dissecting complex problems,
            designing innovative solutions, and staying up-to-date with the
            latest technologies. Programming provides me with an outlet to
            showcase my creativity and offers limitless potential. While my
            experience has mostly been in solo projects, I am eager to
            collaborate effectively within a team, embracing Agile methodologies
            like Scrum. I am excited to connect and collaborate with fellow
            professionals. Let's work together to bring ideas to life and
            achieve outstanding results!`);

const backEndSkills = ref<Skill[]>([
  { imageSrc: "nodejsLogo.png", alt: "node.js" },
  { imageSrc: "expressLogo.png", alt: "express" },
  { imageSrc: "knexLogo.png", alt: "Knex.js" },
  { imageSrc: "mssqlLogo.svg", alt: "MSSQL" },
  { imageSrc: "mysqlLogo.png", alt: "MySQL" },
  { imageSrc: "couchdbLogo.png", alt: "CouchDB" },
]);

const frontEndSkills = ref<Skill[]>([
  { imageSrc: "vueLogo.png", alt: "Vue" },
  { imageSrc: "vuetifyLogo.svg", alt: "Vuetify" },
  { imageSrc: "htmlLogo.png", alt: "HTML" },
  { imageSrc: "tailwindLogo.png", alt: "Tailwind" },
  { imageSrc: "cssLogo.png", alt: "CSS" },
  { imageSrc: "bootstrapLogo.png", alt: "Bootstrap" },
  { imageSrc: "reactLogo.png", alt: "React" },
]);

const languageSkills = ref<Skill[]>([
  { imageSrc: "javascriptLogo.png", alt: "JavaScript" },
  { imageSrc: "typescriptLogo.png", alt: "TypeScript" },
  { imageSrc: "pythonLogo.png", alt: "Python" },
  { imageSrc: "phpLogo.png", alt: "PHP" },
  { imageSrc: "javaLogo.png", alt: "Java" },
]);

const testingSkills = ref<Skill[]>([
  { imageSrc: "vitestLogo.svg", alt: "Vitest" },
  { imageSrc: "jestLogo.png", alt: "Jest" },
]);

const editedContactMe = ref<PartialContactMe>({});

const kisoAnswersheet = ref<Project>({
  title: "Kiso Answersheet",
  description: `Kiso Answersheet is a web application that automates the generation of
      accurate order lists for house construction projects. With its intuitive
      interface, advanced calculations, and auditing capabilities, Kiso
      Answersheet simplifies and accelerates the ordering process for production
      departments. It offers features such as the auto-generation of precise
      order lists, complex computation capabilities, customizable dynamic
      tables, and a user-friendly design.`,
  technologies: `Javascript, Vue.js, Tailwind, Vitest, Pinia, node.js,
      express, Knex.js, CouchDB, MSSQL`,
});

const googleSheetCreator = ref<Project>({
  title: "Google Sheet Creator",
  description: `Google Sheet Creator is a web application created to simplify the process of developing systems with create, update, read, and delete functionalities without the need for programming skills. This application was built using Vue.js, Vuetify, and Pinia for the frontend, and TypeScript, Node.js, Express.js, CouchDB, and Google APIs for the backend. Additionally, users can easily incorporate simple formulas as columns, enhancing the versatility of their applications. By customizing the application to cater to specific company requirements, it provides a tailored solution for various business needs. With this user-friendly interface, individuals can now design their own simple web applications, saving valuable time and eliminating the necessity to learn programming. Despite challenges faced during the development process, such as learning how to utilize Google APIs, with my passion to studying, exploring, and embracing new technologies paved the way for the successful implementation of this web application.`,
  technologies: `Javascript, Vue.js, Vuetify, Jest, Pinia, node.js, Typescript, express, CouchDB, googleapis`,
});
</script>

<style>
.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
