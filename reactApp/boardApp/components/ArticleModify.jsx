// ArticleModify.jsx
import { Form, Col, Row, Button } from 'react-bootstrap'
import { getArticle, modifyArticle } from '../api/article'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import ResultModal from './ResultModal';


const initialState = {
    title: '',
    contents: '',
    writer: ''
}
const ArticleModify = () => {
   
    const { id } = useParams(); //{id: 5}
    const navigate = useNavigate();
    const [article, setArticle] = useState({})
    const [form, setForm] = useState({...initialState})
    
    const [result, setResult] = useState(null);
    // 널이 아닌 경우만 출력
    useEffect(() => {
        getArticle(id)
            .then((data) => {
            setArticle(data);
            })
            .catch((error) => {
            console.log('error: ', error.response.data.message);
        })

    }, [id]);

    const handleChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    // //초기화
    // const handleClickReset = () => {  //상세조회 실패
    //     alert('call');
    //     setArticle({
    //         ...article
    //     })
    // }

    // 게시글 수정
    const handleClickModify = () => {
        if (form.titile === '') {
            alert('제목을 입력하세요');
        } else if (form.writer === '') {
            alert('작성자를 입력하세요');
        } else if (form.contents === '') {
            alert('내용을 입력하세요');
        } else {
            if (confirm('게시글을 수정하시겠습니까?') ) {
                form['id'] = id;
                modifyArticle(form)
                    .then((data) => {
                        setResult(data.message);
                    })
                    .catch((error) => {
                        console.log('error: ', error);
                    })

            }
        }
    }
    //초기화
    const handleClickReset = () => {
        setForm({
            ...article
        })
    }
 


        // try {
        //     const response = await axios.put(`http://localhost:5000/modify/${id}`, form);
            
        //     if (response.status === 200) {
        //         alert('게시글이 성공적으로 수정되었습니다.');
        //         // 필요에 따라 다른 작업을 수행 (예: 페이지 리디렉션)
        //     } else {
        //         alert('게시글 수정에 실패했습니다.');
        //     }
        // } catch (error) {
        //     console.error('Error: ', error);
        //     alert('게시글 수정에 실패했습니다.');
        // }
    

    const closeModal = () => {
        setResult(null);
        navigate({pathname: '/list' }, {replace: true})          
        
    }



    return (
        <>
        <Row className='my-5'>
            <Col className='p-5'>
                <h3 className='text-center my-5'>{id}번 게시글 수정</h3>                
                    <Form>
                    <h4>제목</h4>
                    <Form.Control  className='my-3' name='title'  placeholder={article.title} value={form.title} onChange={handleChangeForm}/>
                    <h4>작성자</h4>
                    <Form.Control  className='my-3' name='writer' placeholder={article.writer} value={form.writer} onChange={handleChangeForm} />
                    <h4>내용</h4>
                    <Form.Control as='textarea' rows={10} className='my-3' name='contents' placeholder={article.contents} value={form.contents} onChange={handleChangeForm} />
                    <div className='text-center'>
                        <Button className='mx-2 px-3 btn-sm' onClick={handleClickModify}>변경</Button>
                        <Button className='mx-2 px-3 btn-sm' variant='secondary' onClick={handleClickReset}>초기화</Button>
                    </div>
                </Form>
            </Col>
        </Row>
        
        { result != null ? <ResultModal title={'게시글 수정'} content={'게시글이 수정되었습니다.'} callbackFn={closeModal} /> : <></> }

        </>
    )
}

export default ArticleModify;