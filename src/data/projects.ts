import type { ImageMetadata } from 'astro';
import sicQuestionsExample from '../assets/sic-questions-example.png';
import synthApp1 from '../assets/synth-app-1.png';
import clockApp from '../assets/clock-app.png';
import timeBandit from '../assets/time-bandit.png';

export interface Project {
  title: string;
  img: ImageMetadata;
  alt: string;
  description: string;
  gitUrl?: string;
  liveUrl?: string;
  caseStudy?: string;
}

const projects: Project[] = [
  {
    title: 'Accessibility Quiz with Admin Back End',
    img: sicQuestionsExample,
    alt: 'A list of items in an accessibility survey',
    description:
      "A survey application built for UK non-profit Sick in the City, allowing potential clients to complete a workplace accessibility quiz, with an admin back end for managing quiz content and viewing data analytics. Built with Next.js, TypeScript, and MongoDB.",
    gitUrl: 'https://github.com/farmeroy/sic-accessibility-form',
    liveUrl: 'https://quiz.sicofficial.co.uk',
    caseStudy: 'sic-app',
  },
  {
    title: 'Synth App',
    img: synthApp1,
    alt: 'A screenshot of synth app sequencer',
    description:
      'A Synthesizer/Sequencer application built with React/TypeScript, Next.js, and Tone.js, using Recoil for state management. The user can create a palette of notes and play music.',
    gitUrl: 'https://github.com/farmeroy/synth-app',
    liveUrl: 'https://synth-app.vercel.app/',
    caseStudy: 'synth-app',
  },
  {
    title: 'International Clock',
    img: clockApp,
    alt: 'Two clocks, one showing New York time and the other Berlin time',
    description:
      'Search and display the time at different locations. Front end built with React/Vite deployed to Amazon S3; the time zone is calculated in an AWS Lambda function built with Rust, and results are cached to the client.',
    gitUrl: 'https://github.com/farmeroy/intl-clock',
    liveUrl: 'https://clock.raffaelecataldo.com',
  },
  {
    title: 'Time Bandit',
    img: timeBandit,
    alt: 'A screenshot displaying a task in progress, its name, and the duration so far',
    description:
      'A time management command line application for tracking time spent on various tasks, built with Rust. Tasks and their individual events are stored in an SQLite database.',
    gitUrl: 'https://github.com/farmeroy/time-bandit',
  },
];

export default projects;
