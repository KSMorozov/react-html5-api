import React, { Component } from 'react';
const placeholder = document.createElement("li");
placeholder.className = "placeholder";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange'],
    };
    this.dragStart = this.dragStart.bind(this);
    this.dragEnd = this.dragEnd.bind(this);
    this.dragOver = this.dragOver.bind(this);
  }

  dragStart(e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.currentTarget);
  }

  dragEnd(e) {
    this.dragged.style.display = 'block';
    this.dragged.parentNode.removeChild(placeholder);

    var data = this.state.colors;
    var from = Number(this.dragged.dataset.id);
    var to = Number(this.over.dataset.id);
    if (from < to) to--;
    if (this.nodePlacement == 'after') to++;
    data.splice(to, 0, data.splice(from, 1)[0]);
    this.setState({ colors: data });
  }

  dragOver(e) {
    e.preventDefault();
    this.dragged.style.display = 'none';
    if (e.target.className == 'placeholder') return ;
    this.over = e.target;
    const relY = e.clientY - this.over.offsetTop;
    const height = this.over.offsetHeight / 2;
    const parent = e.target.parentNode;

    if (relY > height) {
      this.nodePlacement = 'after';
      parent.insertBefore(placeholder, e.target.nextElementSibling);
    }
    else if (relY < height) {
      this.nodePlacement = 'before';
      parent.insertBefore(placeholder, e.target);
    }
  }

  render() {
    return (
      <ul onDragOver={this.dragOver}>
        {
          this.state.colors.map((item, i) => {
            return (
              <li draggable="true"
                  onDragStart={this.dragStart}
                  onDragEnd={this.dragEnd}
                  key={i}
                  data-id={i}
              >
                { item }
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default List;
