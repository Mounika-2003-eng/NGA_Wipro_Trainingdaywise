
# EduLearn Course Manager (Angular)

A simple SPA demonstrating Angular core building blocks for the Day 19 assignment.

## How to run

```bash
# 1) Make sure you have Node.js LTS installed
# 2) Install Angular CLI if you don't have it:
npm i -g @angular/cli

# 3) Install dependencies
npm install

# 4) Start the dev server
npm start
# or: ng serve --open
```

## Where bindings are used

- **Event Binding**: In `CourseListComponent`, the "View Details" button uses `(click)` to call `selectCourse(course)`, which **emits** `(courseSelected)` to the parent. See `src/app/course-list/course-list.component.html` and `.ts`.
- **Property Binding**: The parent (AppComponent) passes the selected course to `CourseDetailComponent` via `[course]="selectedCourse"`. See `src/app/app.component.html`.
- **Two‑Way Binding**: In `CourseDetailComponent`, the inputs use `[(ngModel)]` to edit `course.title`, `course.author`, and `course.description` in real time. See `src/app/course-detail/course-detail.component.html`.
  - Because the selected course is a reference to an item in the same array used by the list, edits reflect immediately in the list.

## Folder structure (key files)

```
edulearn-course-manager/
├─ angular.json
├─ package.json
├─ tsconfig.json
├─ tsconfig.app.json
└─ src/
   ├─ index.html
   ├─ main.ts
   ├─ styles.css
   └─ app/
      ├─ app.module.ts
      ├─ app.component.ts
      ├─ app.component.html
      ├─ app.component.css
      ├─ models/
      │  └─ course.model.ts
      ├─ course-list/
      │  ├─ course-list.component.ts
      │  ├─ course-list.component.html
      │  └─ course-list.component.css
      └─ course-detail/
         ├─ course-detail.component.ts
         ├─ course-detail.component.html
         └─ course-detail.component.css
```
