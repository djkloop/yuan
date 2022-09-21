import { describe, expect, test } from 'vitest'
import { Project } from "../src/app"

describe('page.element', () => {
  const project = Project.create();
  test('project.name', () => {
    expect(project.name).toEqual('New Project')
  })
  test('project.pages.length === 1', () => {
    expect(project.pages.length).toBe(1)
  })

  test('project.json', () => {
    expect(project.getPageJson()).toMatchSnapshot()
  })

})
