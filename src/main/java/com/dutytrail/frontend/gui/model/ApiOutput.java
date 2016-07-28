package com.dutytrail.frontend.gui.model;

import javax.xml.bind.annotation.*;

@XmlRootElement(name = "ApiOutput")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(propOrder = {"content"})
public class ApiOutput {
    @XmlElement(name = "content") private Object content;

    public ApiOutput(){

    }

    public ApiOutput(Object content) {
        this.content = content;
    }

    public Object getContent() {
        return content;
    }
}