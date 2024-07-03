package com.taskManager.taskManager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.taskManager.taskManager.model.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
}
